const express = require("express");
const router = express.Router();
const Controller_form = require("../Controller/formController");



router.get("/getStatusbyId", Controller_form.getStatusbyId);
router.post("/Createfrom", Controller_form.createdForm);



module.exports = router;
