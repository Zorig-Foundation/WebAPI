"use strict";

const mongoose = require("mongoose");

const Form = new mongoose.Schema({
  fname: {
    type: String,
    
  },
  personelid: {
    type: String,
    
  },
  lname: {
    type: String,
    
  },
  age: {
    type: String,
    
  },

  mail: {
    type: String,
    
  },

  phone: {
    type: String,
    
  },
    address: {
    type: String,
    
  },
  univesity_name: {
    type: String,
    
  },
  sex: {
    type: String,
    
  },

  avarage_point: {
    type: String,
    
  },
  salbar_surguuli: {
    type: String,
    
  },
  mergejil: {
    type: String,
    
  },
  grade: {
    type: String,
    
  },
  esse: {
    type: String,
    
  },
});

module.exports = mongoose.model("Forms", Form);
