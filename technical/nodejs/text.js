// const fs = require('fs'); // 引入 Node.js 自带的“文件系统”模块
// const fs = require('fs');
import fs from 'fs';
// 1. 读取一个文件
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("找不到文件，我来创建一个！");
        // 2. 如果没有，就写一个
        fs.writeFileSync('hello.txt', '这是 Node.js 帮你生成的内容');
        return;
    }
    // 3. 如果有，就把内容转成大写（拦截并处理）
    console.log("拦截到内容:", data.toUpperCase());
});