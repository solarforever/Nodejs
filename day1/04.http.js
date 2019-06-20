/* 
    用node构建一个 web 服务器
    在node中专门提供了一个核心模块 ： http
    http这个模块的职责就是帮你创建编写服务器的
*/

// 1. 加载http模块
var http = require('http');

// 2. 使用http.createServer() 方法创建一个web服务器
//      返回一个Server实例
var server = http.createServer();

// 3. 服务器的功能？
//    提供服务： 对数据的服务
//    发请求
//    接收请求
//    处理请求
//    发送响应（反馈）
//    注册request请求事件
//    当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理


server.on('request', function (request, response) {
    //    request 请求事件处理函数，需要接收两个参数
    //      1.Request 请求对象
    //          请求对象可以用来获取客户端的一些信息
    //      2.Response 响应对象
    //          响应对象可以给客户端发送响应信息

    console.log('收到客户端的请求了,请求的路径是：' + request.url)
    //端口号后边的

    // response 对象有一个方法： write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用end 来结束响应，否则客户端会一直等待


    // 根据不同的请求路径发送不同的响应结果
    if (request.url == '/date') {
        response.write('时间')
    } else if (request.url == '/shop') {
        response.write('商店')
    }

    // 加end是为了告诉客户端可以呈现给用户了
    response.end()
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动需要时间，已经启动成功稍等，可以通过http:127.0.0.1:3000进行访问')
})