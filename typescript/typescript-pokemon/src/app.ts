import * as express from 'express';
import { Request, Response } from 'express';
import { Pokemons } from './routes/pokemons';
var totalRequests: number = 0;

class App {
	public app: express.Application;
	public pokeRoutes: Pokemons = new Pokemons();

	constructor() {
		this.app = express();
		this.config();
		this.pokeRoutes.routes(this.app);
	}

	private Logger = (req: Request, res: Response, next: Function) => {
		totalRequests++;
		console.log(`There has been ${totalRequests} requests made to the site`);
		console.log('The last request came from: ' + req.protocol + '://' + req.get('host') + req.originalUrl);
		next();
	};

	private config(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(this.Logger);
	}
}

export default new App().app;
