// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 3000;

// =======================================
//              ROUTES
// =======================================
app.get('/', (req,res) => {
    res.send(`Welcome to TEAMAPP!`)
  })
  




  

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`TEAMAPP listening on port: ${port}`)
  });