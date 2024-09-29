require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes/index');
const contactsRoute = require('./routes/contactsRoute');

app.get('/', routes);
app.use('/contacts', contactsRoute);
app.use(routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
