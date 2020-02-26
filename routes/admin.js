const path = require('path');

const express = require('express');

//As we are not using this now
//const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

const router = express.Router();

//As we create new controller
/* router.get('/add-product', (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}); */

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
