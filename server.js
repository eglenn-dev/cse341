const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require('./routes');
const contactsRouter = require('./routes/contactsRoute');

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/contacts', contactsRouter);
app.use('/', routes);

// Handle 404 - Not Found
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});