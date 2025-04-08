import {Router} from "express";
import { methodHTTP as facturasController } from "../controllers/facturas.controllers.js";


const router = Router();


router.get("/", facturasController.getFacturas)

export default router;

