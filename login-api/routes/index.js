import express from "express";
import { Login, Register } from "../controllers/Users.js";
const router = express.Router();

router.post('/regis',Register );
router.post('/login',Login );

export default router;