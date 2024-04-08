const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductsController')
//API routing end point
 
//create
router.post("/CreateProduct",productController.CreateProduct);
//read
router.get("/ReadProduct",productController.ReadProduct);
router.get("/ReadProduct/:id",productController.ReadProductByID);

//update
router.post("/UpdateProduct/:id",productController.UpdateProduct);

//delete
router.get("/DeleteProduct/:id",productController.DeleteProduct);


module.exports=router;