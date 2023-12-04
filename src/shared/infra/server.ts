import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from "../errors/AppError";
import { env } from "../env/index" 
import { routes } from './routes';

const app = express()

app.use(express.json({ limit: '5mb'}));

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    if (env.NODE_ENV != 'production') {
        console.error(err)
    } else {
        //colocar para enviar logs para Datadog,NewRelic ou Sentry
    }

    return response.status(500).send({ message: 'Erro interno no servidor.' })
},
);


app.listen(env.PORT, () => {
    console.log(process.pid)
    console.log(`Server is running on port ------>>>>>> ${env.PORT}`)
})