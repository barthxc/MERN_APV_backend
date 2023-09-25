import express from "express";
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  actualizarPerfil,
  actualizarPassword
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//Rutas publicas
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);

//Rutas Privadas
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);
router.put('/perfil/:id', checkAuth, actualizarPerfil);
router.put('/actualizar-password', checkAuth, actualizarPassword);

//Private
//Primero abre el middleware y cuando se ejecuta la función. Ejecuta mas tarde el next() para ir al controlador perfil
router.get("/perfil", checkAuth, perfil);

export default router;
