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

// 添加 middleware
exports.middleware = ['formatParam'];
exports.formatParam = { // 中间件参数，即options
    msg: "extra message"
}

exports.security = {
    csrf: { enable: false }
}

// module.exports = {
//     logger: {
//         dir: ""
//     }
// }

// exports.mysql = {
//     // 单数据库信息配置
//     client: {
//         // host
//         host: '127.0.0.1',
//         // 端口号
//         port: '3306',
//         // 用户名
//         user: 'root',
//         // 密码
//         password: 'root',
//         // 数据库名
//         database: 'test',
//     },
//     // 是否加载到 app 上，默认开启
//     app: true,
//     // 是否加载到 agent 上，默认关闭
//     agent: false,
// };