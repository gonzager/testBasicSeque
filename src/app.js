const express = require('express');
require("express-async-errors");
const createFakeData = require('./db/fakeData/createFakeData')
const handleErrors = require('./errors/request.error')
const db = require('./db/models');
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT ?? 3000
const env = process.env.NODE_ENV || 'development';


app.use(express.json())
app.use(routes)
app.use(handleErrors)

app.listen(PORT,async ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  try {
     await db.sequelize.authenticate()
     if (env === 'development') { 
        await db.sequelize.sync({force:true});
        await createFakeData()
     } 
  } 
  catch(err) {
      console.log(err)
  }
})