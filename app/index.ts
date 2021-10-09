import express from "express";
import { initApi } from "./api";
import cors from "cors";

const app = express();
const port = 8020;

app.use(express.json());
app.use(cors());

initApi(app);

app.get('/', (req, res) => {
  res.send("skilltrees api");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
