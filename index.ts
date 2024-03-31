import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hi there! I am city explorer, how may i help you');
// });

app.use("/", require("./model.ts"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
