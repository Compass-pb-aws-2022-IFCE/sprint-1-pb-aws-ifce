const express = require('express');
const app = express();
const port = 3000;

const msg = "Hello World! this is nodejs in a docker container..";

app.get('/', (req, res) =>   res.send(msg));

app.listen(port, () => {
    console.log(`app running on port ${port}...`);
});