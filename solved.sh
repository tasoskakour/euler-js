#!/bin/bash
sed -i -e "s/\(LATEST_PROBLEM = \).*/\1$1;/" index.js
git add . 
git commit -m "Solution $1"
git push origin master