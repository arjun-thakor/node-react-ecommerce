const Sequelize = require("sequelize");
const { development } = require("./config.json");

module.exports = new Sequelize(
	development.database,
	development.username,
	development.password,
	{
		host: development.host,
		dialect: development.dialect,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);
