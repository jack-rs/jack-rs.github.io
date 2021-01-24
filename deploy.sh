#!/usr/bin/env bash
# Make by JackRs
branch="master"
echo "Chọn thao tác commit:"
# update : cap nhat gi
select actions in update publish; do
    # if/else select
    if [[ $actions == publish ]]; then
        echo -n "Tiêu đề commit: "
        read commit
        echo -n "Mô tả commit: "
        read desc
        git add .
        git commit -m "$commit" -m "$desc || ''"
        # deploy with git
        # step 1
        yarn deploy
        # step 2
        git add .
        git commit -m "publish"
        git push origin $branch
        #close
        echo "xuat ban"
        exit
    else
        echo -n "Tiêu đề commit: "
        read commit
        echo -n "Mô tả commit: "
        read desc
        git add .
        git commit -m "$commit" -m "$desc || ''"
        git push origin $branch
        #close
        echo "cap nhat"
        exit
    fi
done
