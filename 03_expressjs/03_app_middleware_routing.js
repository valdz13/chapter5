const express = require('express');
const morgan = require('morgan');
const productRouter = require('./products/products.route');
const userRouter = require('./users/users.route');
const app = express();
const port = 8003;

app.use(morgan('tiny'));
app.use(userRouter);
app.use(productRouter);



app.get('/' , (req , res)=>{
    return res.send('helloworld');
});


// app.get('/products' , (req , res)=>{});
// app.post('/products' , (req , res)=>{});
// app.put('/products/:productId' , (req , res)=>{});
// app.get('/products/:productId' , (req , res)=>{});
// app.delete('/products/:productId' , (req , res)=>{});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port));