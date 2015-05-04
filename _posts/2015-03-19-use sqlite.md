---
layout: post
author: csdn
titile: sqlite 数据类型
category: 专业技术
tag: 安卓
---
####sqlite 数据类型
一般数据采用的固定的静态数据类型，而SQLite采用的是动态数据类型，会根据存入值自动判断。
SQLite具有以下五种数据类型：
1.NULL：空值。
2.INTEGER：带符号的整型，具体取决有存入数字的范围大小。
3.REAL：浮点数字，存储为8-byte IEEE浮点数。
4.TEXT：字符串文本。
5.BLOB：二进制对象。

但实际上，sqlite3也接受如下的数据类型：
	
	smallint 16 位元的整数。
	interger 32 位元的整数。
	decimal(p,s) p 精确值和 s 大小的十进位整数，精确值p是指全部有几个数(digits)大小值，
		s是指小数点後有几位数。如果没有特别指定，则系统会设为 p=5; s=0 。
	float  32位元的实数。
	double  64位元的实数。
	char(n)  n 长度的字串，n不能超过 254。
	varchar(n) 长度不固定且其最大长度为 n 的字串，n不能超过 4000。
	graphic(n) 和 char(n) 一样，不过其单位是两个字元 double-bytes， 
		n不能超过127。这个形态是为了支援两个字元长度的字体，例如中文字。
	vargraphic(n) 可变长度且其最大长度为 n 的双字元字串，n不能超过 2000
	date  包含了 年份、月份、日期。
	time  包含了 小时、分钟、秒。
	timestamp 包含了 年、月、日、时、分、秒、千分之一秒。
	datetime 包含日期时间格式，必须写成'2010-08-05'不能写为'2010-8-5'，
		否则在读取时会产生错误！

Sqlite常用数据类型,

这句话本身就有问题，因为：SQLite是无类型的. 这意味着你可以保存任何类型的数据到你所想要保存的任何表的任何列中, 
无论这列声明的数据类型是什么(只有自动递增Integer Primary Key才有用). 对于SQLite来说对字段不指定类型是完全有效的. 如:

	Create Table ex3(a, b, c);

即使SQLite允许忽略数据类型, 但是仍然建议在你的Create Table语句中指定数据类型. 因为数据类型对于你和其他的程序员交流, 
或者你准备换掉你的数据库引擎是非常有用的. SQLite支持常见的数据类型