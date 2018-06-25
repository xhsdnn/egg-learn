const Controller = require('egg').Controller;

class MainController extends Controller {
    async index() {
        this.ctx.body = "hello world"
    }
}

module.exports = MainController;