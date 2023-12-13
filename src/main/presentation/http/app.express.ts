import express, { Application, NextFunction, Request, Response } from "express";
import { apiv1Router } from "./rest/api.v1";
import helmet from "helmet";
import compression from 'compression';
import { customMorganMiddleware } from "./middlewares/custom-morgan.middleware";
import { errorLogger } from "./middlewares/error-logger.middleware";

const createExpressApplication = async (): Promise<Application>  => {
    const app: Application = express();
    app.disable('x-powered-by');

    //Middlewares Integrados (Built-in)
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //Middlewares de Terceiros
    app.use(helmet());
    app.use(compression());

    //Middleware Customizados
    app.use(customMorganMiddleware);
   
    //Middlewares de Rotas
    app.use('/api/v1', apiv1Router);

     //Middleware de Tratamento de Erros (Error Handling)
    app.use(errorLogger)

    return app;
};

export { createExpressApplication }