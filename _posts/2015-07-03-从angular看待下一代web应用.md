---
layout: post
author: 166yuan
titile: 从AngularJS看下一代web应用
category: 前端
tag: angular
---

	    最近自己接手了一个angular的坑，当时只听到是angular就什么都不鸟就接下来了。
	也想趁此来练手下angular，结果一下子就踏入神坑了。但是，当我从这个坑出来后，成长了不少，
	对spa和下一代web应用也有了更深入的了解
	
![angularjs](http://7xiwi7.com1.z0.glb.clouddn.com/angularjs.jpg)

### 1.下一代web，前后端完全分离的时代
经过这么长久的前后端耦合在一起的开发，像jsp模板输出和php模板输出，虽然这样生成的web高效（后台生成，无需前端解析），但是前后端代码逻辑混淆在一起造成的维护困难所带来的时间精力上的浪费是不言而喻的。也使得开发效率大大下降（前后端无法实现并行工作）。

经过这么多年的探索，随着前端的大变革时代来临，前端也肩负起前后端分离的职责。这时,AngularJS出现了。它让人眼前一亮，双向数据绑定，mvc，aop，让人感觉不想是在打前端。的却，AngularJs说像前端，他更像一个模板框架。如果，新手，仍然一前端的思想，一切dom操作，一切id+css 来看待使用Angular，那么就完全与Angular的思想违背。学习的难度曲线也大大增加。

下一代web应用，后端不再提供模板输出，只提供resultful接口，那么原来的jsp、jstl、php等模板输出都后台都不需要担任
这些任务。那么数据怎么输出呢？这就是交给AngularJS 这类的前端模板了。Angular的真正的设计，就是在下一代web时，取代后台的模板输出，同时，又提供了类似后台模板相同的功能操作，以达到前后端完全分离，达到各司其职，互补干扰的目的。也为并行工作，提供了可能，大大提高了开发效率

### 2.前端肩负更重的工作。

后台输出工作交给前端了。从Angular的api上，我们可以看看后台模板的各种身影。我们来鸟瞰下吧。

(1)类似el表达式的模板输出 

```Hello {{'World'}}!```

(2)令人熟悉的循环打印

	<table>
    	<tr><th>row number</th></tr>
    	<tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]"><td>{{i+1}}</td></tr>
	</table>

(3)mvc架构

	<body ng-controller="PhoneListCtrl">

(4)类似安卓的service服务

	module.service( 'Book', [ '$rootScope', function( $rootScope ) {
      	var service = {
      	books: [
        	{ title: "Magician", author: "Raymond E. Feist" },
        	{ title: "The Hobbit", author: "J.R.R Tolkien" }
      	],

      	addBook: function ( book ) {
        	service.books.push( book );
        	$rootScope.$broadcast( 'books.update' );
      	}
   	}
   	return service;
	}]);

自然，这些思想的出现，也意味着前端编码思想要做很大的改变，朝后台看齐，也意味着，未来的前端不是那么好学的。学习曲线会大大增加，这就是为什么AngularJS的学习曲线大，还容易出错。自然，前端肩负的代码逻辑优化等工作任务将会大大增加。

### 3.思想的转变

用AngularJs这个框架的时候，对于初学者，都会有困惑。为什么要这些写呢？这样和我用js或者jquery去操作不是更方便吗？为什么要用Angular？这就是前端思想到后台思想转不过来原因。很多初学者仍然把Angular当做一个普通JS框架。只是来方便开发。那么，自然做出了的应用四不像，也达不到代码优化的效果。
这里提一下几点自己的开发心得：
(1)不要用jquery来操作dom。首先，引入jq就是一个大错误，不要用jq来增删查改dom节点，而要以Angular的思想，用ng-repeat，数据绑定等去操作。如果，你实在不习惯Angular，可以用Angular.element 封装着jqlite 能像jq语法一样操作dom元素

##（未完待续，敬请期待）


