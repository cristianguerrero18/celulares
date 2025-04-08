import {Router} from "express";
import { methodHTTP as usuariosController } from "../controllers/usuarios.controllers.js";


const router = Router();


router.get("/", usuariosController.getUsuarios)

export default router;
