#!/bin/bash
#build
yarn build

echo "--- Build Thành Công"
#auto commit
git add --all
git commit -am "Changed file $*, Auto-Commit V0.1"
git push origin master

echo "--- Deploy thành công"