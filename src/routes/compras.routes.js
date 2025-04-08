import {Router} from "express";
import { methodHTTP as comprasController } from "../controllers/compras.controllers.js";


const router = Router();


router.get("/", comprasController.getCompras)

export default router;
