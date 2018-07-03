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

describe('good test', () => {
    before(() => { });
    after(() => { });
    beforeEach(() => { });
    afterEach(() => { });

    it('should success', () => {
        return app.httpRequest()
            .get('/api/main')
            .expect(200);
    });

    it('should assets success', async () => {
        const result = await app.httpRequest()
            .get('/api/main')
            .expect(200)
        assert(result.status === 200);
    })
});