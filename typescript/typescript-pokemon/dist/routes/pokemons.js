"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemons = require("../db.json");
class Pokemons {
    routes(app) {
        app.route('/pokemons').get((req, res) => {
            res.json(pokemons);
        });
        app.route('/pokemons/:id').get((req, res) => {
            let id = req.params.id;
            res.json(pokemons[id]);
        });
        app.route('/pokemons').post((req, res) => {
            let data = req.body;
            res.json(data);
        });
    }
}
exports.Pokemons = Pokemons;
