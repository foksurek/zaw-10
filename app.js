const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const { PORT } = require('./config/config');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const helpRoutes = require('./routes/help');
const mainRoute = require('./routes/home');
app.use('/help', helpRoutes);
app.use('/', mainRoute);

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
