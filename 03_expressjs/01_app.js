const express = require('express');
const { getProducts } = require('./products/products.service');
const {
    getUsers,
    // createUsers,
    // readUsers,
    // updateUsers,
    // deleteUsers
} = require('./users/users.service');
const app = express();
const port = 8001;

//domain user management

//get users
app.get('/users', getUsers);
app.get('/products',getProducts);

// //create user
// app.post('/users', createUsers);

// //get spesific user by id
// app.get('/users/:userId', readUsers);

// //update user
// app.put('/users/:userId', updateUsers);

// //delete user
// app.delete('/users/:userId', deleteUsers);

//domain product

//domain payment


app.listen(port, () => console.log('Server started and listen port ' + port));