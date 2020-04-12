const Sequelize = require('sequelize');
const { sequelizeConfig: { host, db_name, user, password, dialect }} = require('../config/');
const sequelize = new Sequelize(`${dialect}://${user}:${password}@${host}:5432/${db_name}`);

module.exports = sequelize;