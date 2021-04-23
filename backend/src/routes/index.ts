import { Router } from "express";
import {createSede, getSedes, updateSede, getSede} from "../controllers/sede.controller"


//Construim el router on posarem totes les entrades de la API
const router = Router();

router.route("/createSede")
  .post(createSede);

router.route('/getSedes')
  .get(getSedes);

router.route("/updateSede/:id")
  .put(updateSede);

router.route("/getSede/:id")
  .get(getSede);

//Exportem totes les rutes per que les utilitzin
export default router;