#!/bin/bash
cd /home/baelish/Scrivania/github/Perifisica
bundle exec jekyll serve
python3 -m pagefind --site _site --serve
