import { Router, Response, Request } from 'express';
import { Todos } from './todos.model';

export const todosRouter = Router();

todosRouter.get('/', (req: Request, res: Response<Todos[]>) =>
  res.json([
    {
      content: 'Learn Node',
      done: false,
    },
  ]),
);
