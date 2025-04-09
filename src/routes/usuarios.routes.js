import {Router} from "express";
import { methodHTTP as usuariosController } from "../controllers/usuarios.controllers.js";


const router = Router();


router.get("/", usuariosController.getUsuarios)
router.post("/", usuariosController.postUsuario)

export default router;
