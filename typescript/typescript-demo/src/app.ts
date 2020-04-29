import * as express from 'express';
import { Request, Response } from 'express';

class App {
	public app: express.Application;
	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}
	private config(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	private routes(): void {
		const router = express.Router();

		router.get('/', (req: Request, res: Response) => {
			res.json({ message: 'Hello World' });
		});

		router.post('/', (req: Request, res: Response) => {
			let bodyData = req.body;
			res.json(bodyData);
		});
		this.app.use('/', router);
	}
}

export default new App().app;
