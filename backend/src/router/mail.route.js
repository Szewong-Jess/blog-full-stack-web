import express from "express";
import {
  sendMailController,
  sendSubscribeEmail,
} from "../controllers/mail.controller.js";

const router = express.Router();

router.post("/", sendMailController);

router.post("/sub", sendSubscribeEmail);

export default router;
