---
layout: post
author: 166yuan
titile:javascript 奇技淫巧（一）
category: 前端
tag: js
---

每一门编程语言都有其独特的编码方式，js也不例外。有一些能提高我们开发效率，提升逼格的编码方式。这里就来一一列举下我找到和积累的

### 1.日期转数值

	var d = +new Date(); //js类型隐式转换

### 2.类对象转数组（比如arguments对象）

	var arr = [].slice.call(arguments)

### 3.取整同时转成数值型

	'10.567890'|0//结果: 10
	'10.567890'^0//结果: 10
	-2.23456789|0//结果: -2
	~~-2.23456789//结果: -2

### 4.合并数组

	（1）var a = [1,2,3];var b = [4,5,6];Array.prototype.push.apply(a, b);
	（2）var a = [1,2,3];var b = [4,5,6];a.concat(b);

### 5.交换值
	
	a= [b, b=a][0];

### 6.快速取最大值和最小值

	Math.max.apply(Math, [1,2,3]) //3  Math.min.apply(Math, [1,2,3]) //1

### 7.判断IE

	var ie = /*@cc_on !@*/false;

(未完待续)