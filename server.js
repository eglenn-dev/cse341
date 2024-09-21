const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.get('/', routes);
app.use(routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
