import { Router } from 'express';
import { findAll } from './todos.handlers';

export const todosRouter = Router();

todosRouter.get('/', findAll);
