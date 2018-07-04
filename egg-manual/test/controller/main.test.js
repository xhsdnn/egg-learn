const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/controller/home.test.js', () => {
    let app;
    before(() => {
        // 创建当前应用的 app 实例
        app = mock.app();
        // 等待 app 启动成功，才能执行测试用例
        return app.ready();
    });
});

it('快速创建一个ctx并传递参数和测试', () => {
    // 快速创建一个ctx实例
    const ctx = app.mockContext({
        user: { name: "dq" }
    });
    // 拿到ctx进行测试
    assert(ctx.method === 'GET');
    assert(ctx.url === '/');
    assert(ctx.user.name === "dq")
});

/***** controller测试  *****/
describe('controller测试成功', () => {
    before(() => { doSomethingBefore() });
    after(() => { });
    beforeEach(() => { });
    afterEach(() => { });

    // 测试get请求
    it('GET should success', () => {
        // 模拟 CSRF token
        app.mockCsrf();

        return app.httpRequest()
            .get('/api/main')
            .expect(200);
    });

    // 测试post请求
    it('POST should success', () => {
        // 模拟 CSRF token
        app.mockCsrf();

        return app.httpRequest()
            .post('/api/main')
            // .type('form')
            .send({
                key: "sdh3oi"
            })
            .expect(200);
    });

    it('should assets success', async () => {
        const result = await app.httpRequest()
            .get('/api/main')
            .expect(200)
        assert(result.status === 200);
    })
});

function doSomethingBefore() {
    console.log('doSomethingBefore')
}

// 执行顺序测试
describe('egg test', () => {
    before(() => console.log('order 1'));
    before(() => console.log('order 2'));
    after(() => console.log('order 6'));
    beforeEach(() => console.log('order 3'));
    afterEach(() => console.log('order 5'));
    it('should worker', () => console.log('order 4'));
});

/***** service测试  *****/
describe("service测试成功", () => {
    it("getInfo测试", async () => {
        const ctx = app.mockContext();

        const info = await ctx.service.main.getInfo();
        assert(info === "123");
    })
})
