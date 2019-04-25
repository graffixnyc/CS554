import {Request, Response} from 'express';

import pokemons = require('../db.json'); //load our local database file

export class Pokemons {
  public routes(app): void {
    //received the express instance from app.ts file
    app.route('/pokemons').get((req: Request, res: Response) => {
      res.status(200).send(pokemons);
    });
    app.route('/pokemons/:id').get((req: Request, res: Response) => {
      let id = req.params.id;
      res.status(200).send(pokemons[id]);
    });
    app.route('/pokemons').post((req: Request, res: Response) => {
      let data = req.body;
      res.status(200).send(data);
    });
  }
}
