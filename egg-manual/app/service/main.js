const Service = require('egg').Service;

class MainService extends Service {
  async getInfo() {
    return "123";
  }
}

module.exports = MainService;
