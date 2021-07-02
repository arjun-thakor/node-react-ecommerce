const { Server } = require("http");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js");
const db;


const db = require('./models');
db.sequelize.sync()
.then(() => {
    server.listen(port);
})
.catch(e => console.log(e))
server.om('error', onError);
server.on('listening', onListening);
 

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password,{
    dialect:'mysql',
    host:config.db.host
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize 
.authenticate()
.then(() => {
    console.log('Connection successful');
})
.catch(err => {
    console.log('Connection Error please try again');
})

module.exports = db;