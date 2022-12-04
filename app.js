// import and create an express app
const express = require('express');
const app = express()
  
// message as response
msg = "Hello world! this is nodejs in a docker container.."
// create an end point of the api
app.get('/', (req, res) => res.send(msg));
  
// now run the application and start listening
// on port 3000
app.listen(3000, () => {
    console.log("app running on port 3000...");
})