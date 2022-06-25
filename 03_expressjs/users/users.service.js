

const usersCollection = [];

const getUsers = (req, res) => {
    return res.send('usersCollection');
};

// const createUsers = (req, res) => {
//     const userId = 1;
//     const user = {
//         id: userId,
//         name: 'username',
//         password: 'password',
//     };
//     return res.send('Create users');
// };

// const readUsers = (req, res) => {
//     return res.send('Read users');
// };

// const updateUsers = (req, res) => {
//     return res.send('Update users');
// };

// const deleteUsers = (req, res) => {
//     return res.send('Delete users');
// };

module.exports = {
    getUsers,
    // createUsers,
    // readUsers,
    // updateUsers,
    // deleteUsers
};