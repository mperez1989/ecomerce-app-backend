const request = require('supertest');
const app  = require('../app');


let id;
let token;

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



test('POST /users/login', async () => {
    const body = {
        email: 'silea@gmail.com',
        password: 'silea123'
    }
    const res = await request(app).post('/users/login').send(body)
    token = res.body.token;
    expect(res.status).toBe(200)
    expect(res.body.token).toBeDefined()

});

test('GET /users  trae los usuarios', async() => {
    const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array)
});

test('PUT /users/:id actualiza un usuario', async () => {
    const body = {firstName:'silea update'};
    const res = await request(app)
        .put(`/users/${id}`)
        .send(body)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
});

test('POST /users/login debe retornar credenciales incorrectas', async () => {
    const body = {
        email: 'incorrecto@gmail.com',
        password: "incorecto123"
    }
    const res = await request(app).post('/users/login').send(body)
    expect(res.status).toBe(401)
})

test('DELETE /users/:id elimina un usuario', async () => { 
    const res =await request(app)
        .delete(`/users/${id}`)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204);
});

 