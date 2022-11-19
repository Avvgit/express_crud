import Pasajero from "../models/pasajero";

/* HTTP Verb / CRUD 
POST / Create
GET / Read
PUT / Update-Modify
DELETE / Delete
*/

//get que me traiga todos los pasajeros
export const getPasajeros = async ( req, res ) => {
  try{
    const pasajero = await Pasajero.findAll();
    res.send(pasajero);
  }catch (err) {
    console.log(err);
  } 
}

//get pasajeros por Id:
export const getPasajeroById = async (req, res) => {
  try {
      const pasajero = await Pasajero.findByPk(req.params.id);
      if (!pasajero) { //Si no hay id para pasajero
          res.status(404).send({
              message: `No se encontro pasajero con id ${req.params.id}`
          });
      }
      res.send(pasajero);
  } catch (err) {
      console.log(err);
  }
}

//crear un nuevo pasajero
export const createPasajero = async (req, res) => {
  try {
      await Pasajero.create(req.body); //usamos el modelo y le pasamos el modelo que seria un json
      res.json({
          "message": "Pasajero Creado",
      });
  } catch (err) {
      console.log(err);
  }
}

//modificar o actualizar un pasajero por id
export const updatePasajero = async (req, res) => {
  try {
      const pasajero = await Pasajero.findByPk(req.params.id); //donde le llega por parametro 
      if (!pasajero) {
          res.status(404).send({
              message: `No se encontro pasajero con id ${req.params.id}`
          });
          return;
      }
      await Pasajero.update(req.body, {
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "Pasajero Modificado"
      });
  } catch (err) {
      console.log(err);
  }
}

//borrar pasajero por id:
export const deletePasajero = async (req, res) => {
  try {
      const pasajero = await Pasajero.findByPk(req.params.id);
      if (!pasajero) {
          res.status(404).send({
              message: `No se encontro pasajero con id ${req.params.id}`
          });
          return;
      }
      await Pasajero.destroy({
          where: {
              id: req.params.id
          }
      });
      res.json({
          "message": "Pasajero Deleted"
      });
  } catch (err) {
      console.log(err);
  }
}
