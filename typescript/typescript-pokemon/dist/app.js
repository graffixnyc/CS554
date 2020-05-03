'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express = require('express');
const pokemons_1 = require('./routes/pokemons');
var totalRequests = 0;
var dict = {};
class App {
  constructor() {
    this.pokeRoutes = new pokemons_1.Pokemons();
    this.Logger = (req, res, next) => {
      totalRequests++;
      console.log(`There has been ${totalRequests} requests made to the site`);
      console.log(
        'The last request came from: ' +
          req.protocol +
          '://' +
          req.get('host') +
          req.originalUrl
      );
      next();
    };
    this.app = express();
    this.config();
    this.pokeRoutes.routes(this.app);
  }
  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(this.Logger);
  }
}
exports.default = new App().app;
