const express = require('express');

const ProductsService = require('../services/product.service');
const service = new ProductsService();// para crear una nueva clase

const router = express.Router();

router.get('/', async(req, res) => {
  const products = await service.find(); //estoy llamando el servicio
  res.json(products);//como respuesta ma envia los productos en formto json
});

router.get('/:id', async(req, res) => {
  const { id } = req.params;//me saca el paramtro que tengo en la ruta 
  const product = await service.findOne(id);//le envio el parametro sacado de la ruta 
  res.json(product);
});

router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  
  });

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});

module.exports = router;
