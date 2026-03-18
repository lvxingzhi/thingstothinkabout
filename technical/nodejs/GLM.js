const axios = require('axios');

async function askAI(userInput) {
    const response = await axios.post('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        model: "glm-4.7",
        messages: [
            // 这里就是你的“调教”规则
            {
            "role": "user",
            "content": "写一首关于春天的诗"
        }
        ]
    }, {
        headers: {'Content-Type': 'application/json', 'Authorization': 'e19aaa65afb84a9183ac0753e6e62b47.wfAAW1Y7eev5Ogmc' }
    });

    console.log("AI 转化后的结构化数据：", response.data.choices[0].message.content);
}

askAI("明天我要去开会，大概2小时，还得写个PPT，这个比较急");
