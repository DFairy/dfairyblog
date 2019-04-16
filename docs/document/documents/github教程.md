# Github教程 :yellow_heart:
首先你需要一个Github账号，没有可以先去注册:[https://github.com](https://github.com)

## 新建项目
1. 点击右上角的:heavy_plus_sign:号

2. 点击`new repository `
3. 根据下面这张图填进信息,创建完成后就会在仓库中看到项目了。

![图片](http://porcin457.bkt.clouddn.com/20181207103315242.png)

## Git下载与配置

如果想要系统的学习一遍Git，推荐[廖雪峰老师的Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
1. [安装Git](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137396287703354d8c6c01c904c7d9ff056ae23da865a000)

2. 安装完成后，打开Git Bash
3. 配置账号

```js
git config --global user.name “your_username” #设置用户名
git config --global user.email “your_registered_github_Email” #设置邮箱地址
```

4. 配置`ssh-key` （如果想要clone别人的项目，这一步要配置的）
* 打开Git Bash,进入~路径下，必须保证当前路径在~路径下
* 输入以下命令
```js
ssh-keygen -t  rsa -C "your_registered_github_Email"//建议写自己真实有效的邮箱地址。注意：在敲代码是不要将双引号也敲击进去。
Enter file in which to save the key (/c/Users/xxxx_000/.ssh/id_rsa)://此时我们什么都不需要操作直接回车就好
Enter passphrase (empty for no passphrase):  //此时要你输入码（可以为空，直接回车就好，也可以输入你的密码，这个密码在你最后把本地资源推送到github上面的时候回会让你填写密码，此时密码隐藏，你输入进去是看不到的）
Enter same passphrase again: //再次确认密码（如果你第一次有输入密码，这次就再输一次，如果没有直接回车就行了）
```
* 直到看到下面这些代码
```js
Your identification has been saved in /c/Users/xxxx_000/.ssh/id_rsa. //生成的密钥
Your public key has been saved in /c/Users/xxxx_000/.ssh/id_rsa.pub. //生成的公钥
The key fingerprint is:e3:51:33:xx:xx:xx:xx:xxx:61:28:83:e2:81 xxxxxx@yy.com
*本机已完成ssh key设置，其存放路径为：c:/Users/xxxx_000/.ssh/下。其中xxxx_000为你的用户名
```
* 添加ssh key 到Github上
  * 打开c:/Users/xxxx_000/.ssh里面的id_rsa.pub文件，全选复制公钥内容。或者在Git Bash中输入cat ~/.ssh/id_rsa.pub,也可以得到公钥内容

  * 打开Github,点击右上角的头像
  * 点击Settings
  * 点击SSH and GPG keys
  * 点击New SSH key,Title自定义，将公钥内容复制到key中。
* 测试ssh keys是否设置成功。
```js
 ssh -T git@github.com
```

## 上传代码到Github

### 复制项目链接并下载项目

1. 打开刚刚新建的GitHub项目，进入首页

2. 点击`clone or download`,复制链接
![图片](http://porcin457.bkt.clouddn.com/2019-04-02_133343.png)

### 上传代码到Github
打开Git Bash,输入下面命令，再打开Github就能看到了
```js
git clone https://github.com/DFairy/dfairyblog.git //刚刚复制的地址
cd dfairyblog //你clone下来的文件名


/**将你要上传的文件放入你clone下来的文件中再继续下面的操作**/
git add . //别忘记后面的.，此操作是把文件夹下面的文件都添加进来）
git commit  -m  "提交信息"  //“提交信息”里面换成你需要，如“first commit”
git push -u origin master   //此操作目的是把本地仓库push到github上面
```
::: tip 提示
Git Bash 里面不可以用Ctrl+c和Ctrl+v来复制粘贴，只能点击鼠标右键
:::

### 创建分支
上传分支代码命令

```js
git checkout -b branchname(分支名字)   //创建并且切换分支.
git add . //别忘记后面的.，此操作是把文件夹下面的文件都添加进来）
git commit  -m  "提交信息"  //“提交信息”里面换成你需要，如“first commit”
git push origin: branchname
```

以下是操作分支的命令行
```js
git checkout -b branchname(分支名字)    //创建并且切换分支.
git checkout  branchname(分支名字)      //切换分支
git push origin branchname             //将分支推送到github
git branch -r                          //查看所有远程分支的名字（a是本地分支加远程分支）
git branch -d branchname               //删除本地分支，要切换到master才能删除
git push origin: branchname            //删除github上面的远程分支
git checkout master                    //从分支切换到主支
```

## 配置Git指定不上传的文件

新建文件`.gitignore`,在里面加上文件名就好了
```js
.DS_Store
node_modules
/dist
 
# local env files
.env.local
.env.*.local
 
# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
 
# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```
## 删除Github项目
1. 点击仓库上方的`Settings`

2. 将页面拖动到底部，点击`delete this repository`，再输入你要删除的项目名就好了。

## 用Github展示你的网页
1. 创建分支gh-pages,操作命令见[创建分支](#创建分支)

2. 创建完成后上传内容，操作步骤同上
3. 打开网址`https://[你的github名字].github.io/[你的项目名字]`就可以看到展示的内容了,
拿这个博客举例[https://dfairy.github.io/dfairyblog](https://dfairy.github.io/dfairyblog)

## 我在Github操作中遇到的几个报错的解决方法
1. :question:**问题**：我在提交Github的时候报了下面这个错误

`$ git push -u origin master
To https://github.com/DFairy/img.git![rejected]master -> master (fetch first)
error: failed to push some refs to 'https://github.com/DFairy/img.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.`

:heavy_check_mark:**解决方法：**
```
1: 进行push前先将远程仓库pull到本地仓库
$ git pull --rebase origin master
$ git push -u origin master
 
2: 强制push本地仓库到远程 (这种情况不会进行merge, 强制push后远程文件可能会丢失 不建议使用此方法)
$ git push -u origin master -f
 
3: 避开解决冲突, 将本地文件暂时提交到远程新建的分支中
$ git branch [name]
# 创建完branch后, 再进行push
$ git push -u origin [name] 
```
---
2. :question:**问题**：尝试新增一个文件夹，push完之后报错如下：

`Everything up-to-date Branch 'master' set up to track remote branch 'master' from 'origin'.`

**原因：**

也就是说一开始 git 服务器仓库是完全空的，
不包含任何一个分支(branch)，因此刚开始 Push 时需要指定一个。

:heavy_check_mark:**解决方法：**
```
$ git remote -v
origin  https://github.com/DFairy/essay (fetch)
origin  https://github.com/DFairy/essay (push)
$ git branch
* master
```
---
3. :question:问题：我从分支切换到主支的时候报了下面这样的一个错

`git checkout master
error: The following untracked working tree files would be overwritten by checkout:`

**原因**：

通过错误提示可知，是由于一些untracked working tree files引起的问题。所以只要解决了这些untracked的文件就能解决这个问题。

:heavy_check_mark:**解决方法**：
```
git clean -d -fx
```
git clean -d -fx表示：删除 一些 没有 git add 的 文件；

**git clean 参数**    
```
 -n 显示将要删除的文件和目录；
 -x -----删除忽略文件已经对git来说不识别的文件
 -d -----删除未被添加到git的路径中的文件
 -f -----强制运行
 git clean -n
 git clean -df
 git clean -f
```