var http = require("http");

var server = http.createServer()


// request 请求事件处理函数,需要接收两个参数
//      request :请求对象
//               可以用来获取客户端的一些请求信息,例如请求路径
//      response :响应对象
//                响应对象可以用来给客户端发送响应消息

server.on('request',function(request,response){
    console.log("收到客户端的请求了,请求路径是:" + request.url)
    // 这个url 是端口号后边的一串

    // response 对象有一个方法： write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用end 来结束响应，否则客户端会一直等待

    response.write("hello");
    response.write("nodejs");
    
    response.end()//若这行没有 上边的不执行

    // 注:改了代码要重启才生效


})

// 绑定端口号,启动服务器
server.listen(3000,function(){
    console.log('服务器启动需要时间，已经启动成功稍等，可以通过http:127.0.0.1:3000进行访问')
})