import express from "express";
import productosRoutes from "./routes/productos.routes.js";

const app = express(); 

app.set("port",5000);

app.use("/api/productos",productosRoutes)

export default app;

