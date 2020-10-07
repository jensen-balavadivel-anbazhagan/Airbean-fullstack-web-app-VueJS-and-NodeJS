const express = require("express");
const router = express.Router();
const db = require('../db');

let dateFormat = () => {
  let today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth() + 1;
  const yyyy = today
    .getFullYear()
    .toString()
    .substr(-2);
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  let date = `${yyyy}/${mm}/${dd}`;
  return date;
};

let timeToDelivery = () => {
  let distance = Math.floor(Math.random() * 20) + 1;
  let droneSpeed = 80;

  let time = (distance / droneSpeed) * 60;
  time = Math.round(time);
  return time;
};

function generateOrderNr() {
  let letters = ["X", "Y", "Z"];
  return `AB${Date.now()}${
    letters[Math.floor(Math.random() * letters.length)]
  }`;
}

exports.showOrderHistory = async (request, response) => {
  let email = request.params.email;
  let history = await db.getUserOrderHistory("history",email);
  if (history != 'undefined' && history != null && history != '') {
   response.status(200).json({
     status: "success",
     data : history,
     message: "All products are fetched"
   });
   } else {
     console.log("No Products in the cart");
   }
};

exports.sendOrder = async (request, response) => {
  let orderedItems = request.body;
  let orderNo = generateOrderNr();
  let obj = {
    timestamp: dateFormat(),
    id: orderNo,
    email:orderedItems.userEmail,
    items: orderedItems.items,
    totalPrice: orderedItems.totalPrice,
    totalQuantity: orderedItems.totalQuantity,
    eta: timeToDelivery()
  };
  await db.addData("history",obj);
  var addedHistory = db.getData("history", orderNo);
     if (addedHistory != 'undefined' && addedHistory != null && addedHistory != '') {
      response.status(200).json({
        status: "success",
        data : obj,
        message: "All products are added"
      });
        //Check to see if the added order is now available in the cart and if not present then return failure
      } else {
        console.log("No Products added");
      }
};
