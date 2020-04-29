import { Request, Response } from 'express';
import pokemons = require('../db.json');

export class Pokemons {
	public routes(app): void {
		app.route('/pokemons').get((req: Request, res: Response) => {
			res.json(pokemons);
		});

		app.route('/pokemons/:id').get((req: Request, res: Response) => {
			let id = req.params.id;
			res.json(pokemons[id]);
		});

		app.route('/pokemons').post((req: Request, res: Response) => {
			let data = req.body;
			res.json(data);
		});
	}
}
