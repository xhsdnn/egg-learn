# egg-learn

参考笔记：[Egg.js小记](https://blog.csdn.net/qq_26733915/article/details/81041739)

补充：
    添加两种连接数据库方式，分别为：`egg-mysql`以及`egg-sequelize`。

    在`config/plugin.js`中启用插件：
    
    ```js
    exports.mysql = {
        enable: true,
        package: 'egg-mysql'
    };

    exports.sequelize = {
        enable: true,
        package: 'egg-sequelize',
    };
    ```

    在`config/config.default.js`中添加相应配置：

    ```js
    exports.mysql = {
        client: {
            // host
            host: '127.0.0.1',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'root',
            // 数据库名
            database: 'dqdev',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    exports.sequelize = {
        // 类型
        dialect: "mysql",
        // host
        host: "127.0.0.1",
        // 端口号
        port: "3306",
        // 用户名
        username: "root",
        // 密码
        password: "root",
        // 数据库名
        database: "dqdev"
    };
    ```

    使用：

    ```
    git clone https://github.com/xhsdnn/egg-learn.git

    cd egg-manual

    npm install

    npm run dev
    ```

    查询api：

    `egg-mysql`查询数据库：`http://127.0.0.1:7001/api/main/1?name=dq`；
    `egg-sequelize`查询数据库：`http://127.0.0.1:7001/api/main`。

    **注：** 发送“查询api”前提需要先创建一个mysql数据库以及表，根据自己的数据库信息修改上面配置信息。

    #### 具体的`Sequelize`更多用法可以参考：

        [egg-mysql](https://github.com/eggjs/egg-mysql)

        [egg官方文档](https://eggjs.org/zh-cn/tutorials/sequelize.html)

        [egg-sequelize](https://github.com/eggjs/egg-sequelize)
        
        [Sequelize官网](http://docs.sequelizejs.com/)