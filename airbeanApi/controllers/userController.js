const express = require("express");
const router = express.Router();
const db = require('../db');
const uuid = require('uuid');

// Where we will keep users
const User = db.getDbData("menu");

exports.createUser = async (request, response) => {
  let body = request.body;
  var dbUser = db.getDetails("users",body.email);
  if (dbUser != 'undefined' && dbUser != null && dbUser != '') {
    response.status(200).json({
      status: "failure",
      data : dbUser,
      message: "User already exists"
    });
  } else {
  await db.addData("users",body);
    var addedUser = db.getDetails("users",body.email);
       if (addedUser != 'undefined' && addedUser != null && addedUser != '') {
        response.status(200).json({
          status: "success",
          data : addedUser,
          message: "User created successfully"
        });
        
          //Check to see if the added user is now available in the cart and if not present then return failure
        } else {
          console.log("User is not created");
        }
      }
  
};

exports.getUser = async (request, response) => {
  let body = request.params.id;
  var users = db.getDetails("users",body);
  if (users != 'undefined' && users != null && users != '') {
    response.status(200).json({
      status: "success",
      data : users,
      message: "User returned successfully"
    });
    
      //Check to see if the user is now available in the cart and if not present then return failure
    } else {
      console.log("User is not found");
    }
};

exports.getUserOrderHistory = async (request, response) => {
  let his = await db.getData("history",request.params.id );
  response.send(his);
};


