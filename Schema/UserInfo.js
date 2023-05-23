"use strict";

const mongoose = require("mongoose");

const User = new mongoose.Schema({

    personelid: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", User);
