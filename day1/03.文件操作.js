var fs = require('fs');
fs.writeFile('例子修改.txt', '大家好，给大家介绍一下，我是Node.js', function (error) {
    if (error) {
        console.log('读取失败')
    } else {
        console.log('写入成功')
    }
})