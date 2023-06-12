import * as z from 'zod';

import { db } from '../../db';
import { WithId } from 'mongodb';

export const TodosSchema = z.object({
  content: z.string().min(1),
  done: z.boolean(),
});

export type Todos = WithId<z.infer<typeof TodosSchema>>;

export const TodosCollection = db ? db.collection<Todos>('todos') : undefined;
