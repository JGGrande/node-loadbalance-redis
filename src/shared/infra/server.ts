import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from "../errors/AppError";
import { env } from "../env/index"
import { routes } from './routes';
import cluster from "cluster";
import { cpus } from "os";

const numberOfCPUs = cpus().length;

if(cluster.isPrimary){
  console.log(`Processo principal criado: ${process.pid.toString()}`)

  for(let i = 0; i < numberOfCPUs; i++){
    console.log(`Criado processo filho: ${i}...`)
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Processo ${worker.process.pid?.toString()} finalizado`)
    cluster.fork();
  });

}else {

  const app = express()

  app.use(express.json({ limit: '5mb'}));

  app.use(routes);

  app.get('/', (request: Request, response: Response) => {
    console.log(process.pid)
    return response.end(process.ppid.toString())
  })

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
}
