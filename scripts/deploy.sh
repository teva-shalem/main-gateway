#!/usr/bin/env sh

# abort on errors
set -e

yarn build

rsync -av --delete dist/ root@151.115.33.32:/var/www/html/"${FOLDER}" 
