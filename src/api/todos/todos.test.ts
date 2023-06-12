import request from 'supertest';
import app from '../../app';
import { TodosCollection } from './todos.model';

beforeAll(async () => {
  try {
    await TodosCollection?.drop();
  } catch (error) {}
});

describe('Get /api/v1/todos', () => {
  it('responds with an array of todos', async () => {
    request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.length).toBe(0);
      });
  });
});
