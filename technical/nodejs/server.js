const http = require('http'); // 引入网络模块

const server = http.createServer((req, res) => {
    // 这里的 req 就是“拦截”到的浏览器请求
    console.log("浏览器想要访问:", req.url);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.end('<h1>欢迎来到 Node.js 服务器</h1><p>我是从内存里直接吐给你的</p>');
    } else if (req.url === '/data') {
        // 模拟接口返回数据
        res.end(JSON.stringify({ city: "长沙", tech: "Node.js" }));
    } else {
        res.statusCode = 404;
        res.end('页面丢了');
    }
});

server.listen(3000, () => {
    console.log("服务器已启动：访问 http://localhost:3000");
});
