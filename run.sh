#!/bin/bash
cd ~/Scrivania/github/Perifisica
bundle exec jekyll serve
python3 -m pagefind --site _site --serve
