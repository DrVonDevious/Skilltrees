import express from "express";
import { initApi } from "./api";

const app = express();
const port = 8020;

initApi(app);

app.get('/', (req, res) => {
  res.send("skilltrees api")
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
