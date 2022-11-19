import { Sequelize } from 'sequelize';

const db = new Sequelize(
  "alePruebas", // Esta DB ya la tenemos creadas ej: "larnu_demo"
  "postgres", // ej: larnu
  "123456", // contraseña
{
  host: "localhost", // si trabajamos en nuestra computradora solamente
  dialect: "postgres",
  logging: false,
  port: 5432, //es el puerto por defecto, si tenemos otro tenemos que ponerlo
  define: {
    timestamps: false // tiene el uso de dos campos createup y updatecreate, nosotros aca le decimos que no haga eso
   }
});

export default db;