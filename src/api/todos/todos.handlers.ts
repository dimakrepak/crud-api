import { Request, Response } from 'express';
import { Todos, TodosCollection } from './todos.model';

export async function findAll(_req: Request, res: Response<Todos[]>) {
  const result = await TodosCollection?.find();
  const todos = await result?.toArray();

  res.json(todos);
}
