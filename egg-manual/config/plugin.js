const path = require('path');

exports.nunjucks = {
    enable: true,
    package: "egg-view-nunjucks"
};

exports.tranInt = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/transform-int')
}

// 数据库
exports.mysql = {
    enable: true,
    package: 'egg-mysql'
};

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};