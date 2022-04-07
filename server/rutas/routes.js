const ProductoController = require('../controladores/product.controller');

module.exports = function(app) {
    
    app.get('/product/getAll',ProductoController.getAllProducts);
    app.post('/product/new',ProductoController.createProduct);
    app.get('/product/:id',ProductoController.findProductbyid);
    app.put('/product/:id',ProductoController.editProduct);
    app.delete('/product/:id',ProductoController.deleteProduct);
}