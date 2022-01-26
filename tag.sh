branch="$(git rev-parse --abbrev-ref HEAD)";
git pull origin $branch;
tag="$branch-$(date +'%s')";
git tag $tag;
git push origin $tag;
gh release create $tag --target $branch
echo "Triggered build via tag $tag";
