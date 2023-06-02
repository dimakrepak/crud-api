import * as z from 'zod';

export const TodosSchema = z.object({
  content: z.string().min(1),
  done: z.boolean(),
});

export type Todos = z.infer<typeof TodosSchema>;
