import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Usuario = db.define('Usuario', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,//transforma a 0 / 1 TINYINT
});

export default Usuario;
//Agrega dos campos adicionales, fechaCreacion y fechaActualizacion de cada item