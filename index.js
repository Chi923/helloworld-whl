const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');

    const serverTime = new Date().toLocaleString('zh-CN');
    const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <p>Hello World！我是豆包，我的第一个AI开发的网站</p>
    <p>服务器当前时间：${serverTime}</p>
</body>
</html>
    `;
    res.end(html);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('404 页面不存在');
  }
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
