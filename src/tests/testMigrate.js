const app = require('../app');
const sequelize = require('../utils/connection');
const request = require('supertest');

const main = async() => {
    try{
        // Acciones a ejecutar antes de los tests
        const user = {
            firstName: "test",
            lastName: "test",
            email: "test@gmai.com",
            password: "test123",
            phone: "123456158"
        }
        await request(app).post('/users').send(user)




        sequelize.sync();
        
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();