import express from 'express';
import morgan from 'morgan';
import path from 'path';
import routes from './routes/routes';

const app = express();
const port = 3000;

//View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Logger
app.use(morgan('tiny'));

// Static files Middleware
app.use(express.static('public'));

// Routes
app.use(routes);

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

// Port listener
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
