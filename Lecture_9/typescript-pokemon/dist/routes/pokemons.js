"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemons = require("../db.json"); //load our local database file
class Pokemons {
    routes(app) {
        app.route('/pokemons')
            .get((req, res) => {
            res.status(200).send(pokemons);
        });
        app.route('/pokemons/:id')
            .get((req, res) => {
            let id = req.params.id;
            res.status(200).send(pokemons[id]);
        });
        app.route('/pokemons')
            .post((req, res) => {
            let name = req.body.name; //this requires body-parser package
            let attack = req.body.attack;
            res.status(200).send(req.body);
        });
    }
}
exports.Pokemons = Pokemons;
