const Sequelize = require('sequelize');
const dbconfig = require('../src/config/database')
const User = require('../src/models/User')

const connection = new Sequelize(dbconfig)//

User.init(connection);

module.exports = connection