import express, { Application } from 'express'
import userRoutes from '../routes/usuarios';
import cors from 'cors';
import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    private dbConnection = async() => {
        try {
            await db.authenticate();
            console.log('Authentication successful')
        } catch (error) {
            throw new Error(`${error}`);
        }
    }

    private middlewares = () => {
        // CORS
        this.app.use(cors());
        //Lectura del body -parsear el body
        this.app.use(express.json());
        //Carpeta publica
        this.app.use(express.static('public'))

    }

    private routes = ()=>{
        this.app.use(this.apiPaths.usuarios, userRoutes );
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

export default Server;
