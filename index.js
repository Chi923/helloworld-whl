// 引入node内置http模块
const http = require('http');

// 配置端口
const PORT = 3000;

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头：状态码200，文本编码utf-8
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  // 获取当前服务器时间
  const now = new Date().toLocaleString('zh-CN');

  // 页面HTML内容
  const html = `
  <!DOCTYPE html>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
      body {
        font-family: "Microsoft Yahei", sans-serif;
        font-size: 24px;
        text-align: center;
        margin-top: 100px;
      }
      .time {
        color: #2980b9;
        margin-top: 30px;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <div>Hello World！我是【whl】，我的第一个AI开发的网站</div>
    <div class="time">服务器当前时间：${now}</div>
  </body>
  </html>
  `;

  // 返回页面内容
  res.end(html);
});

// 启动监听
server.listen(PORT, () => {
  console.log(`服务器启动成功！访问地址：http://127.0.0.1:${PORT}`);
});
