const Controller = require('egg').Controller;

class MainController extends Controller {
    // GTE /api/main
    async index() {
        // 使用插件
        let tranIntRes = this.app.tranInt("113r111r");

        const ctx = this.ctx;
        let info = await ctx.service.main.getInfoById();     
        ctx.helper.success(ctx, info);
    }

    // GTE /api/main/new
    async new() {
        this.ctx.helper.success(this.ctx, "new");
    }

    // GTE /api/main/:id?name=xxx
    async show() {
        let { id } = this.ctx.params; // 路由参数，即{id:1}
        let { name } = this.ctx.query; // 请求体，即url中?后面的参数，{name:"dq"}，如果是GET请求可以省略request，POST请求获取请求体只能使用this.ctx.request.body
        let options = {
            id: id,
            name: name
        }
        let info = await this.ctx.service.main.getInfo(options);

        this.ctx.body = {
            code: 0,
            data: info
        };
        this.ctx.status = 200;
    }

    // GTE /api/main/:id/edit
    async edit() {
        this.ctx.helper.success(this.ctx, "edit");
    }

    // POST /api/main
    async create() {
        let requestBody = this.ctx.request.body; // 获取请求体

        this.ctx.helper.success(this.ctx, "create");
    }

    // PUT /api/main/:id
    async update() {
        this.ctx.helper.success(this.ctx, "update");
    }

    // DELETE /api/main/:id
    async destroy() {
        this.ctx.helper.success(this.ctx, "destroy");
    }
}

module.exports = MainController;