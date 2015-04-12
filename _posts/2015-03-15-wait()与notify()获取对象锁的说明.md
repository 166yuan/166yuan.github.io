---
layout: post
author: 166yuan
titile: wait()与notify()获取对象锁的说明
category: 专业技术
tag: 安卓
---
   ###wait()与notify()获取对象锁的说明
在线程中，notify（）和wait（）的调用必须指定一个对象，而且该线程必须拥有该Object对象的monitor。而获取monitor的简单方法就是使用synchronized关键字。
1.当调用wait方法，对象会释放掉对象锁，进入sleep状态。
2.当一个对象调用notify（）方法时，所有在这个对象上等待的线程将被唤醒。

最近在写一个安卓的tcp/udp IM程序时，遇到这个问题，网友使用的一种代码方式，我
学习了下。
```
synchronized (this) {
notify();
}
```
当客户端有消息要发送时，输出流要notify对象上等待的线程来发送消息。
```
相同的，当发送完消息时，线程就进入等待状态，不占用系统资源
synchronized (this) {
wait();// 发送完消息后，线程进入等待状态
}
```
