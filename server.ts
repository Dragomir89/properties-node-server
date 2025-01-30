import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./src/router";

const app = express();

app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

const MONGO_URL =
  "mongodb+srv://dragomirrmildov:DeadPool0889@cluster0.75bp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) =>
  console.log("CONNECTION ERROR" + error)
);

app.use("/", router());
