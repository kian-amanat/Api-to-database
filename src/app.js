import "dotenv/config";
import express from "express";
import { query } from "./core/database/postgres-service.js";
import { router as todoRouter } from "./routes/todos/routes.js";

const app = express();

const port = 3000;

// query("select * from public.tasks")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  next();
});

app.get("/test", (req, res) => {
  res.json({
    message: "express js app is running",
  });
});

app.use(todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
