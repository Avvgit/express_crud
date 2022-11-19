import { Sequelize } from 'sequelize';
//Import Connection
import db from '../config/database'; //import conenection

// init DataTypes para asignarle los tipos a nuestra db
const { DataTypes } = Sequelize;

const Pais = db.define('pais', {
  
  id: {
    type: DataTypes.INTEGER, //(Asignarle el valor a la DB)
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  } 
},{
  tableName: 'pais' // Para definir nosotros el nombre de la db y no sequelize
});

export default Pais;