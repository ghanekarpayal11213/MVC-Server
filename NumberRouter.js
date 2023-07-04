import express  from 'express';
import { processFactorial,processSum } from '../controllers/NumberControllers.js';
const numberRouter=express.Router();

numberRouter.get("/factorial/n",processFactorial);
numberRouter.post("/sum",processSum);

export default numberRouter;

