import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# parametri
k, m = 4.0, 1.0          # costante elastica, massa
A, L0 = 0.5, 1.5         # ampiezza, lunghezza di equilibrio (appesa)
w = np.sqrt(k / m)
T = 2 * np.pi / w
fps = 30
t = np.linspace(0, 3 * T, int(3 * T * fps))
y = -L0 + A * np.cos(w * t)   # quota della massa (rilasciata da ferma in alto)

def spring(y_end, n=10, width=0.15):
    ys = np.linspace(0, y_end, 2 * n + 2)
    xs = np.zeros_like(ys)
    xs[1:-1] = width * (-1) ** np.arange(len(ys) - 2)
    return xs, ys

fig, (ax1, ax2) = plt.subplots(
    1, 2, figsize=(10, 5), sharey=True,
    gridspec_kw={"width_ratios": [1, 3]}
)
ax1.set_xlim(-0.6, 0.6)
ax1.set_ylim(-L0 - A - 0.4, 0.2)
ax1.axhline(0, color="k", lw=4)                     # soffitto
ax1.set_xticks([])
ax1.set_ylabel("quota")
spring_line, = ax1.plot([], [], "k-", lw=1.5)
mass, = ax1.plot([], [], "s", color="tab:red", ms=28)

ax2.set_xlim(0, t[-1])
ax2.axhline(-L0, color="gray", ls=":", lw=1)       # posizione di equilibrio
ax2.set_xlabel("tempo")
curve, = ax2.plot([], [], color="tab:blue", lw=2)
dot, = ax2.plot([], [], "o", color="tab:red")
link, = ax2.plot([], [], "--", color="tab:red", lw=1)

def update(i):
    xs, ys = spring(y[i])
    spring_line.set_data(xs, ys)
    mass.set_data([0], [y[i]])
    curve.set_data(t[:i + 1], y[:i + 1])
    dot.set_data([t[i]], [y[i]])
    link.set_data([0, t[i]], [y[i], y[i]])
    return spring_line, mass, curve, dot, link

ani = FuncAnimation(fig, update, frames=len(t), interval=1000 / fps, blit=True)
# ani.save("molla.gif", writer="pillow", fps=fps)   # oppure "molla.mp4" (serve ffmpeg)
plt.show()
