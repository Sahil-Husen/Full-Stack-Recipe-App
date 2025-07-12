import express from "express";
import {addRecepe,getRecepes,getRecepe} from '../controllers/recepeController.js'

const router = express.Router();

router.post("/addRecepe", addRecepe);
router.get("/getRecepes", getRecepes);
router.get("/getRecepe/:id", getRecepe);
 export default  router;