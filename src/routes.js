const express = require('express');
const Controller = require('./controllers/UserController')

const routes = express.Router();

routes.get('/users', Controller.index)
routes.post('/users', Controller.store )

module.exports = routes;

