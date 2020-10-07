const express = require("express");
const router = express.Router();
const db = require('../db');
const uuid = require('uuid');

// Where we will keep products
let menu = db.getDbData("menu");

exports.getProducts = async (req, res) => {
  console.log(`Get all products`);
  if(menu === null && menu === '') {
    return res.status(404).json({
          status: "failure",
          message: "There is no menu available"
        });
  } 

   res.status(200).json({
          status: "success",
          data : menu,
          message: "All products are fetched"
        });
};

exports.getKey = async (request, response) => {
  let user = await db.getData("users","unknown");;
  if (user) {
    response.send(user);
  } else {
    
    let user = {
      "name":"unknown",
      "id":"unknown",
      "email":"unknown"
    };
    await db.addData("users",user);
    var addedUser = db.getData("users", "unknown");
       if (addedUser != 'undefined' && addedUser != null && addedUser != '') {
        response.send(user);
          //Check to see if the added user is now available in the cart and if not present then return failure
        } else {
          console.log(error);
        }
      }
};
