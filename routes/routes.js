import express from "express";
//Import Controllers
import { 
    getPasajeros,
    getPasajeroById,
    createPasajero,
    updatePasajero,
    deletePasajero
 } from "../controllers/pasajeros";

 const router = express.Router();

router.get('/pasajeros', getPasajeros);
router.get('/pasajeros/:id', getPasajeroById);
router.post('/pasajeros', createPasajero);
router.put('/pasajeros/:id', updatePasajero);
router.delete('/pasajeros/:id', deletePasajero);

export default router;