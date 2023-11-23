const request = require('supertest');
const app  = require('../app');


let id;

test('GET /users  trae los usuarios', async() => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
});

test('POST /users crea un usuario', async () => {
    const body = {
        firstName: 'silea',
        lastName: 'de lima',
        email: 'silea@gmail.com',
        password: 'silea123',
        phone: '997413997'
    }
    const res = await request(app).post('/users').send(body)
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(body.firstName);
    expect(res.body.id).toBeDefined()
});

test('PUT /users/:id actualiza un usuario', async () => {
    const body = {firstName:'silea update'};
    const res = await request(app).put(`/users/${id}`).send(body);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
 });

test('DELETE /users/:id elimina un usuario', async () => { 
    const res =await request(app).delete(`/users/${id}`);
    expect(res.status).toBe(204);
 })