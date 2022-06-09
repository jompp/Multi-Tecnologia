import express from "express";
import { contactController } from "./controllers/contactController.js";
import { partnershipController } from "./controllers/partnershipController.js";

export const routes = express.Router()

routes.post("/form-contato", contactController.create)
routes.post("/form-parceria", partnershipController.create)