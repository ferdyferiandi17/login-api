import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/index.js";
dotenv.config();
const app = express();

app.use(cors({credentials: true, origin:"//untuk api yang mengakses jika react localhost 3000"}))
app.use(express.json());
app.use(router);

app.listen(8000, ()=> console.log('server berjalan di port 8000'));