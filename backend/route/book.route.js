import express from "express"

import { getBook } from "../controller/book.controller.js";

const router=express.Router();

// define route for get book api

router.get("/",getBook);

export default router;
