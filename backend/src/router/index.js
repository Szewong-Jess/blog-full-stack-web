import express from "express";
import AuthRoutes from "./auth.route.js";
import BlogRoutes from "./blog.route.js";
import MailRoutes from "./mail.route.js";

const router = express.Router();

router.use("/auth", AuthRoutes);

router.use("/blog", BlogRoutes);

router.use("/mail", MailRoutes);

export default router;
