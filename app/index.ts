import express from "express";

const app = express();
const port = 8020;

app.get('/', (req, res) => {
  res.send('Hello Express!')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
