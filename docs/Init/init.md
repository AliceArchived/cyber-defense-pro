## Init

```shell
git config  user.name "Alice"
git config  user.email "alys8715ia@gmail.com"

git push --set-upstream origin work
git commit --amend --reset-author -m 'some comments'

git remote remove origin
git remote add origin xxx
git push -u origin main

```

## Debug

```shell
# 测试该 key 是否有效：
ssh -T git@github.com

# 检查 SSH Agent
ssh-add -l

# 如果没看到 ~/.ssh/id_rsa，就运行：
ssh-add ~/.ssh/id_rsa

# 验证当前身份：
ssh -i ~/.ssh/id_rsa -T git@github.com
```

## Branch

```shell
git checkout main
git fetch origin
git merge origin/work
```

## Tag

1. Create a Tag

Lightweight tag:

```bash
git tag v1.0.0
```

Annotated tag (recommended for releases, includes message and metadata):

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
```

2. Push the Tag to GitHub

```bash
git push origin v1.0.0
```

Push All Tags at Once

```bash
git push origin --tags


# view tag
git tag

# list with details
git show v1.0.0


```

5. Delete a Tag

```bash
# Delete local
git tag -d v1.0.0

# delete remote
git push origin --delete tag v1.0.0

```
