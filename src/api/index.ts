import express from 'express';

import { todosRouter } from './todos/todos.route';

export const apiRouter = express.Router();

apiRouter.use('/todos', todosRouter);
