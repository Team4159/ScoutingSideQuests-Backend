/* ------------------- IMPORTS ------------------- */
import dotenv from "dotenv";
dotenv.config(); // Loads .env contents to process.env

import express from "express";

import usersRoutes from "./routes/users";
import adminRoutes from "./routes/admin";
import expressWs from "express-ws";
/* ------------------- IMPORTS END ------------------- */

/* ------------------- CONSTANTS ------------------- */
const expressServer = express();
expressWs(expressServer)
/* ------------------- CONSTANTS END ------------------- */

/* ------------------- ROUTES ------------------- */
expressServer.use("/users", usersRoutes);
expressServer.use("/admin", adminRoutes);
/* ------------------- ROUTES END ------------------- */