"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'demo', '12345', {
    host: 'localhost',
    dialect: 'mysql' //base de datos que usaré
    //logging: false, //cada modificacion se vera en la consola
});
exports.default = db;
//# sourceMappingURL=connection.js.map