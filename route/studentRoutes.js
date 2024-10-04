import express from "express";

const route=express.Router();

import stuController from "../controller/studentController.js";

route.get("/stuInfo",stuController.stuInformation);
route.get("/display",stuController.stuDisplay);
route.post("/stuCreate",stuController.stuInsert);





export default route;