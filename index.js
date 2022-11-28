// import express
import express from "express";
import router from "./routes/routes.js";

// init express
const app = express();

// use router
app.use(router);

app.listen(3000, () => console.log("Server Running at http://localhost:3000"));
