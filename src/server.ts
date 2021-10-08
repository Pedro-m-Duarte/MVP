import express from 'express';
import cors from 'cors'; // configurar o node_modules (uma pasta dentro do /src e uma fora (dentro do MVP))
const app = express();
const port =3333;
import router from './API/routes';

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, ()=> {
  console.log("Running application in http://localhost:"+port);
});
