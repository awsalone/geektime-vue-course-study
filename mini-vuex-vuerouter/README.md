# 笔记
1. vuex
* 使用provide/inject实现注入，对app实例使用use挂载时会调用install函数（或函数本身）
* 定义类Store对传入的options进行处理，处理getters时使用computed以使state数据变化时getters处理同步更新