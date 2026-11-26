module.exports = async (req, res) => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const serverTime =
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ` +
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World - whl</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #ffe9d6, #fff7ec);
      color: #5b4636;
      padding: 20px;
    }
    .title {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      line-height: 1.6;
    }
    .time {
      margin-top: 28px;
      font-size: 20px;
      color: #2980b9;
      background: #ffffff;
      padding: 12px 22px;
      border-radius: 14px;
      box-shadow: 0 6px 18px rgba(214, 142, 88, .18);
    }
    .tip {
      margin-top: 18px;
      font-size: 13px;
      color: #9a8070;
    }
  </style>
</head>
<body>
  <div class="title">Hello World！我是【whl】，我的第一个AI开发的网站</div>
  <div class="time">服务器当前时间：${serverTime}</div>
  <div class="tip">每次刷新页面，时间都会更新为服务器的实时时间</div>
</body>
</html>`;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(html);
};
