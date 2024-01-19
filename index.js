import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

try {
  await db.authenticate();
  db.sync();
  console.log("Conexion Full");
} catch (error) {
  console.log(error);
}

const port = 5005;

app.use("/auth", usuarioRoutes);

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
