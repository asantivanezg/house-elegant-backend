import express, {Application} from 'express'
import IndexRoute from './routes/index.route'
import ClienteRoute from './routes/cliente.route'

export class App {
    app: Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        // this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private settings() {
        this.app.set('port', process.env.PORT);
    }

    private routes() {
        this.app.use(IndexRoute);
        this.app.use('/api/cliente', ClienteRoute);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}