---
layout: post
author: 166yuan
titile: 在windows下搭建jekyll
category: 心得
tag: jekyll
---
##给还没用jekyll的读者
首先，给大家个学习网站，搭建和如何写blog都可以到这里去学习。
[jekyll中文站](http://jekyllcn.com/) 官网的中文版，绝对的学习好去处。

一般来说，搞jekyll都不建议在windows下面搞，官网也是一样。不过，年轻人爱**折腾**嘛。
所以，还是一起来学习下吧。

1.首先安装ruby  [点我下载](http://rubyinstaller.org/downloads/),注意，不要下版本太高的，要和
下面的ruby development kit 适用，注意32位和64位。
2.下载DevKit（即ruby development kit），上面那个网底部有，记住下对应版本号的（官网有说明）
3.安装ruby和devkit
* 从rubyinstaller下载安装包并安装到某个磁盘中，比如：E:\Ruby192，在安装界面把所有的选项都勾选上。
* 把下载的DevKit解压到某个目录，比如 E:\devkit , 在该目录中运行如下命令
  ``` ruby dk.rb init```
* 来生成一个config.xml配置文件，该配置文件中包含了前面的Ruby安装目录 （如E:\Ruby192） 然后运行如下命令
``` ruby dk.rb install ```
再命令行下打入 ``` ruby -version ```   和 ``` gem -v```
能成功显示 如 ruby 2.1.5p273 (2014-11-13 revision 48405) [x64-mingw32]   和  2.2.2（gem版本）
则说明安装成功了。
4.接下来就是jekyll的安装了。
接下来就是坑了。很多网上教程都没题到，ruby官方已经被墙了。不能直接下载要设置镜像，不懂这一步就要坑很久了。
* 这里提供山东理工大学的镜像。
```
输入下列命令:
$ gem sources --remove https://rubygems.org/
$ gem sources -a http://ruby.sdutlinux.org/
$ gem sources -l   
输出：
*** CURRENT SOURCES ***
http://ruby.sdutlinux.org
# 请确保只有 ruby.sdutlinux.org
$ gem install jekyll
```
这个方法安装rails时也适用哦。

* 然后，输入``` jekyll -v```
能正确显示版本号就OK啦
到此jekyll的安装就结束了。

####接下来就是去jekyll官网学习的时间了
当然，要写博客，自然还要学会markdown，jekyll官网没提供，这里提供大家一些
[Markdown，你只需要掌握这几个](http://www.tuicool.com/articles/fmeMbqR)
[Markdown: Basics （快速入门）](http://wowubuntu.com/markdown/basic.html)






