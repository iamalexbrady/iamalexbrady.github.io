#!/bin/bash
for a in /home/alexa/popdemtech/abcim/docs/_urtext/[0-9]_*.md; do
    #mv $a `printf %04d.%s ${a%.*} ${a##*.}`
    printf %04d.%s ${a%.*} ${a##*.}
done
