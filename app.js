import express from "express"; 
import cors from "cors"; //cors es una libreria de capa de seguridad
// Import connection Data Base
import db from "./config/database";
// Import router
import router from "./routes/routes";
// Init express
const app = express(); 
// use express json
app.use(express.json());

app.use(cors());

//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(router);

app.listen(4000, () => {
    console.log('Server running on localhost:4000...');
  });
