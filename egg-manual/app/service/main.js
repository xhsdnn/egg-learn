const Service = require('egg').Service;

class MainService extends Service {
  // 通过egg-mysql
  async getInfo(options) {
    let userInfo = await this.app.mysql.query("select * from users where name = '" + options.name + "'");
    return userInfo;
  }
  
  // 通过egg-sequelize
  async getInfoById() {
    let userInfo = await this.ctx.model.User.findById(1);
    return userInfo;
  }
}

module.exports = MainService;
