import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import Youch from 'youch';

import routes from './src/app/routes/index.js';
/**
 * Base app - class based.
 */
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  /**
   * Application middlewares definition (to every request)
   */
  middlewares() {
    this.server.disable('x-powered-by');
    this.server.use(cors());
    this.server.use(express.json());
  }

  /**
   * Base routes definition
   */
  routes() {
    this.server.use('/api', routes);
  }

  /**
   * Default exception handler (that method prevent the app from broke)
   */
  exceptionHandler() {
    this.server.use(async (err, req, res, _next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
