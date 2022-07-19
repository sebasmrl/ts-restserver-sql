"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    nombre: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    estado: sequelize_1.DataTypes.BOOLEAN, //transforma a 0 / 1 TINYINT
});
exports.default = Usuario;
//Agrega dos campos adicionales, fechaCreacion y fechaActualizacion de cada item
//# sourceMappingURL=usuario.js.map