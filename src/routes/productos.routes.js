import {Router} from "express";
import { methodHTTP as productosController } from "../controllers/productos.controllers.js";


const router = Router();


router.get("/", productosController.getProductos);
router.post("/", productosController.postProducto);

export default router;

