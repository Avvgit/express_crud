import { Sequelize } from 'sequelize';

//Import Connection
import db from '../config/database'; //import conenection
import Pais from './pais';

const { DataTypes } = Sequelize;

const Pasajero = db.define('pasajero', {
  //Definicion de atributos de la tabla
  id: {
    type: DataTypes.INTEGER, //(Asignarle el valor a la DB)
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING
  },

  lastname: {
    type: DataTypes.STRING
  },

  mlastname: {
    type: DataTypes.STRING
  },

  email: {
    type: DataTypes.STRING
  },

  age: {
    type: DataTypes.INTEGER
  },
  
  id_pais: { // Para relacionar con la tabla pais
    type: DataTypes.INTEGER,
    field: 'id_pais',
    references: {
      model: Pais,
      key: 'id'
    }
  }
  
},{
  tableName: 'pasajero'
  });

export default Pasajero;