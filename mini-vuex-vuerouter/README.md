# 笔记
1. vuex
* 使用provide/inject实现注入，对app实例使用use挂载时会调用install函数（或函数本身）
* 定义类Store对传入的options进行处理，处理getters时使用computed以使state数据变化时getters处理同步更新

2. vuerouter
* 路由跳转有hash模式和history模式，分别通过监听hashchange和popstate事件，监听修改路由的变化