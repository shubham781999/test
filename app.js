const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send("Node App Running");
});

app.listen(3000);
