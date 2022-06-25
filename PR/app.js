const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

const userList = [];
let counter = 1;

//module untuk ambil data 
app.use(bodyParser.json());

// API lihat semua user
app.get('/users', (req, res) => {
    return res.json(userList);// menampilkan semua user yang ada dalam userList
});

//API membuat user baru
app.post("/users/", (req, res) => {
    //menerima input dari body
    const newUser = req.body;
    const newUserId = counter;
    newUser.id = newUserId;
    console.log(newUser);
    
    userList.push(newUser);//memasukan new user ke user list
    counter++;//tambah counter untuk id user baru berikutnya
    return res.json(userList); //menampilkan user yang baru saja dibuat
});

//API ambil 1 user
app.get('/users/:userId', (req, res) => {
    console.log(req.params);//menerima input dari parameter userID
    const selectedUser = userList.find((selectedUser) => selectedUser.id == req.params.userId);//mencari user yang sesuai dengan userId
    return res.send(selectedUser);//menampilkan user yang dimaksud
})

//API update user
app.put("/users/:userId", (req, res) => {
    console.log(req.params);//menerima input dari parameter userID
    const selectedUser = userList.find((selectedUser) => selectedUser.id == req.params.userId);//mencari user yang sesuai dengan userId

    //meng update user yang dipilih dengan input baru
    selectedUser.name = req.body.name;
    selectedUser.pass = req.body.pass;

    return res.send(selectedUser);//menampilkan user yang selesai di update
});


//API delete user
app.delete("/users/:userId", (req, res) => {
    console.log(req.params);//menerima input dari parameter userID
    const selectedUser = userList.find((user) => user.id == req.params.userId);//mencari user yang sesuai dengan userId
    const deleteUser = userList.findIndex((user) => user.id === selectedUser.id);//mencari index user yang sesuai dengan selectedUser
    
    userList.splice(deleteUser,1);//menghapus user dari userList
    return res.send(userList);//menampilkan semua user yang ada dalam userList 
});



//HOME
app.get('/', (req, res) => {

    res.send('PATH Utama')

});



//Listen Port
app.listen(port, () => console.log('> Server is up and running on port : ' + port));