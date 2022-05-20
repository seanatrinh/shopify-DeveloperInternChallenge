const Router = require('express-promise-router');
const model = require('./model');

const router = new Router();

router.get('/items', async(req, res) => {
  try {
    const page = req.query.page || 1;
    const count = req.query.count || 50;
    const { rows } = await model.getItems(page, count);
    res.status(200).send(rows);
  } catch(err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.get('/warehouses', async(req, res) => {
  try {
    const { rows } = await model.getWarehouses();
    res.status(200).send(rows);
  } catch(err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.post('/item', async(req, res) => {
  try {
    const { rows } = await model.createItem(req.body);
    res.status(200).send(rows);
  } catch(err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.post('/warehouse', async(req, res) => {
  try {
    const { rows } = await model.createWarehouse(req.body);
    res.status(200).send(rows);
  } catch(err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.put('/item', async(req, res) => {
  try {
    const { rows } = await model.updateItem(req.body);
    res.status(200).send(rows);
  } catch(err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

router.delete('/item', async(req, res) => {
  try {
    const { rows } = await model.updateItem(req.body);
    res.status(200).send(rows);
  } catch(err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;