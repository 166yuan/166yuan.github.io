---
layout: post
author: 166yuan
titile: javascript 模块化操作
category: 前端
tag: javascript
---
###什么是模块化开发？
一个模块就是实现特定功能的文件，有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。模块开发需要遵循一定的规范，否则就都乱套了。

常见的模块化方案有以下几种，分前端和后台。不同js模块化方案不同。
![模块化](http://7xiwi7.com1.z0.glb.clouddn.com/modeling.png)

#####什么是AMD呢？
AMD 即```Asynchronous Module Definition```,即异步模块定义，它是一个在浏览器端模块化开发的规范，服务器端的规范是CommonJS
模块将被异步加载，模块加载不影响后面语句的运行。所有依赖某些模块的语句均放置在回调函数中。
```AMD``` 是 ```RequireJS``` 在推广过程中对模块定义的规范化的产出。

AMD规范只定义了一个函数 ```define```，它是全局变量。
函数的描述为 ```define(id?, dependencies?, factory)```;