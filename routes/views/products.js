const express = require("express");
const router = express.Router();
const productMocks = require('../../utils/mocks/products');
const ProductsService = require('../../services/products');
const productService = new ProductsService();
router.get("/", async function(req, res,next) {
  try {
    const {tags} = req.query;
    const products =await  productService.getPoducts({tags})
    res.render("products", { productMocks });
  } catch (error) {
    next(error);
  }
});


module.exports = router;