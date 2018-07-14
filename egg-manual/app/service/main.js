const Service = require('egg').Service;

class MainService extends Service {
  async getInfo(options) {
    options.height = 180;
    options.age = 20;
    return options;
  }
}

module.exports = MainService;
