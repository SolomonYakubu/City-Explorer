import express, { Request, Response } from "express";
import runChat from "./model";
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hi there! I am city explorer, how may i help you");
});
app.post("/message", async (req: Request, res, Response) => {
  const message = req.body.message;
  const reply = await runChat(message);
  res.json(reply);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
