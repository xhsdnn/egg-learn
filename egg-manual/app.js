// app.js

module.exports = app => {
    // 自定义内容
    app.abc = 'abc'
    
    app.beforeStart(async () => {
        // 应用会等待这个函数执行完成才启动
        // app.cities = await app.curl('http://example.com/city.json', {
        //     method: 'GET',
        //     dataType: 'json',
        // });
        console.log("==app beforeStart==");
        // 也可以通过以下方式来调用 Service
        // const ctx = app.createAnonymousContext();
        // app.cities = await ctx.service.cities.load();
    });

    app.ready(async () => {
        console.log("==app ready==");
    })

    app.beforeClose(async () => {
        console.log("==app beforeClose==");
    })


    app.once('server', server => {
        // websocket
        console.log("==server==");
    });
    app.on('error', (err, ctx) => {
        console.log("==error==");
        // report error
    });
    app.on('request', ctx => {
        // log receive request
        console.log("==request==");
    });
    app.on('response', ctx => {
        // ctx.starttime is set by framework
        const used = Date.now() - ctx.starttime;
        console.log("==response==");
        // log total cost
    });
};
