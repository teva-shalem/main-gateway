#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
 echo $BASE_URL > CNAME

git init
git add -A
git commit -m 'deploy'

 git push -f https://github.com/"${REPO}".git master:gh-pages

cd -
