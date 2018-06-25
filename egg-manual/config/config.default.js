exports.keys = "egg-learn";

// 添加view配置
exports.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
        ".tpl": "nunjucks"
    }
}
// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// 添加 middleware robot
exports.middleware = ['robot'];
exports.robot = {
    ua: [/Baiduspider/i]
};
