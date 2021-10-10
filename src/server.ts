import express from 'express';
import cors from 'cors';
import router from './API/routes';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
	console.log(`Running the application on: http://localhost:${port}`);
});

app.get("/", (request, response) => {
  return response.json({
    helloWord: "Hello Word",
    App: "NodeJs App"
  });
});
