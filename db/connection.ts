import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'demo','12345', {
    host: 'localhost',
    dialect: 'mysql' //base de datos que usaré
    //logging: false, //cada modificacion se vera en la consola
});

export default db;
