const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 5005;


//app.use(morgan("tiny"));

app.get('/error',(req, res, next)=>{
    //penyebabError;
    try{
        throw new Error('error ketika proses create');
        res.send('error');
    } catch (err){
        next()
    }
})

app.use((err,req,res, next) => {
    console.log('ada error => '+ err.message);

    return res.status(500).json({
        message: err.message,
        status: 500,
    });
});


app.get('/', (req, res) => {

    res.send('hello from simple server :)')

});

app.listen(port, () => console.log('> Server is up and running on port : ' + port));