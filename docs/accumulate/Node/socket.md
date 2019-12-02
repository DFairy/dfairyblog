# socket实现简单的聊天功能
以下我分别用了websocket和socket.io来实现

[socket.io官网](https://socket.io/docs)

[websocket官网](http://www.websocket.org)

[websocketAPI](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)

[简单聊天室](https://github.com/DFairy/chatSocket)

## socket.io
### 服务端要安装插件`socket.io`
```
npm install --save socket.io
```
客户端安装插件`socket.io-client`
```
npm install --save socket.io-client
```

### socket.io接收和发送事件
1. 服务端代码(框架express)
```js
//app.js
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    //emit发送事件
    socket.emit('news', { hello: 'world' });
    //接收事件
    socket.on('my other event', function(data) {
        console.log(data);
    });
});
```

2. 客户端代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 客户端要引入socket.io.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
    <title>Document</title>
</head>

<body>
    <script>
        var socket = io('http://localhost');
        socket.on('news', function(data) {
            console.log('data:' + data);
            socket.emit('my other event', {
                my: 'data'
            });
        });
    </script>
</body>

</html>
```
### 简单的聊天功能
```js
//app.js
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var clientCount = 0;
server.listen(2000);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    clientCount++;
    socket.nickname = '用户' + clientCount
        //广播
    io.emit('enter', socket.nickname + '进来了')
    socket.on('message', (str) => {
        io.emit('message', socket.nickname + 'says:' + str)
    })
    socket.on('disconnect', () => {
        io.emit('leave', socket.nickname + '离开了')
    })
});
```

```html
<!-- index.htm -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- 客户端要引入socket.io.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
    <title>Document</title>
</head>

<body>
    <div>
        <h1>聊天室</h1>
        <input type="text" id="sendTxt">
        <button id="send">发送</button>
    </div>
    <script>
        var socket = io('http://172.19.10.178:2000');
        document.getElementById('send').addEventListener('click', () => {
            var txt = document.getElementById('sendTxt').value;
            if (txt) {
                socket.emit('message', txt)
            }
        })
        socket.on('enter', function(data) {
            showMessage(data)
        });
        socket.on('leave', function(data) {
            showMessage(data)
        });
        socket.on('message', function(data) {
            showMessage(data)
        });

        function showMessage(str, type) {
            let div = document.createElement('div')
            div.innerHTML = str
            document.body.appendChild(div)
        }
    </script>
</body>

</html>
```

## websocket
### 简单demo
```js
var websocket = new WebSocket("ws://echo.websocket.org/");
//连接
websocket.onopen = function() {
    showMessage('connected')
}
//关闭
websocket.onclose = function() {
    showMessage('close')
}
//接收数据
websocket.onmessage = function(e) {
    showMessage(e.data)
}
document.getElementById('send').addEventListener('click', () => {
    var txt = document.getElementById('sendTxt').value;
    if (txt) {
        //发送数据
        websocket.send(txt)
    }
})
function showMessage(str, type) {
    let div = document.createElement('div')
    div.innerHTML = str
    document.body.appendChild(div)
}
```

### 自己搭建node来实现简单聊天室
1. 安装插件[nodejs-websoket](https://github.com/sitegui/nodejs-websocket)

2.代码
```js
var ws = require("nodejs-websocket")
var clientCount = 0;

var server = ws.createServer(function(conn) {
    console.log("New connection")
    clientCount++;
    conn.nickname = '用户' + clientCount
    broadcast(conn.nickname + '进来了')
    conn.on("text", function(str) {
        broadcast(conn.nickname + 'says:' + str)
    })
    conn.on("close", function(code, reason) {
        broadcast(conn.nickname + '离开了')
    })
    conn.on("error", function(err) {
        console.log(err)
    })
}).listen(3000)

function broadcast(str) {
    server.connections.forEach((connection) => {
        connection.sendText(str)
    })
}
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div>
        <h1>聊天室</h1>
        <input type="text" id="sendTxt">
        <button id="send" style="cursor: pointer">发送</button>
    </div>
    <script>
        var websocket = new WebSocket("ws://172.19.10.178:3000/");
        websocket.onopen = function() {
            document.getElementById('send').addEventListener('click', () => {
                var txt = document.getElementById('sendTxt').value;
                if (txt) {
                    //发送数据
                    websocket.send(txt)
                }
            })
        }
        websocket.onclose = function() {
            showMessage('close')
        }
        websocket.onmessage = function(e) {
            showMessage(e.data)
        }
        
        function showMessage(str, type) {
            let div = document.createElement('div')
            div.innerHTML = str
            document.body.appendChild(div)
        }
    </script>
</body>

</html>
```