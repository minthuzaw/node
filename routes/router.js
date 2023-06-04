import express from "express";
import {home, about} from "../controllers/page";

const router = express.Router();

router.get("/", home);

router.get("/about", about);
export default router;
