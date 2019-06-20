// 浏览器中的js没有操作文件的能力

// 但是node中有文件操作的能力


// fs 是 filesyetem 的简写 文件系统的意思
// 在 node 中如果想进行文件操作，就必须引入fs这个核心模块
// 在 fs 这个核心模块中，提供了所有的文件操作相关的API
// 例如：fs.readFile 就是用来读取文件的


// 1.使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 2.读取文件
//      第一个参数是位置 
//      第二个参数是一个回调函数 
//          成功
//              data->数据
//              error->null
//          失败
//              data->null
//              error->错误对象
fs.readFile('1.简单相关', function (error, data) {
    // console.log(data) 输出的是二进制数字 将其用toString转换一下
    if (error) {
        console.log('读取失败')
    } else {
        console.log(data.toString())
    }
})
