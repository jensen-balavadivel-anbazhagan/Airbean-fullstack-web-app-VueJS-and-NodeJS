const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('dbData.json');
const db = low(adapter);

//DB operations
//To retrive all items from menu or cart based on data key
module.exports.getDbData = (dataKey) => {
    let data = db.get(dataKey).value();
    if(data != 'undefined' && data != null && data != '') {
        return data;
    } 
}

//To retrive the product details from DB (menu or cart based on the datakey)
module.exports.getData = (datakey, id) => {
    // Searching products for the id
    return db.get(datakey).find({ id: id }).value();
  }

  //To retrive the user details for the userfrom DB 
module.exports.getDetails = ( datakey, email) => {
  // Searching products for the id
  return db.get(datakey).find({ email: email }).value();
}

 //To retrive the e orderhistory details for the userfrom DB 
 module.exports.getUserOrderHistory = ( datakey, email) => {
  // Searching products for the id
  return db.get(datakey).filter(val =>  email == email ).value();
}


  //To add the coffee to the cart or to add a new user
  module.exports.addData = (dataKey, bean) => {

    db.get(dataKey).push(bean).write();
  }
//To remove the coffee from the cart
  module.exports.removeBean = (dataKey, bean) => {

    db.get(dataKey).remove(bean).write();
  }

   //To update the bean to the cart
   module.exports.updateBean = (dataKey, key, value) => {

    db.get(dataKey).assign({key : value}).write();
  }