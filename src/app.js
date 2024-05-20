const express = require('express');
const session = require('express-session');

const Keycloak = require('keycloak-connect');
const cors = require('cors')
require("express-async-errors");
const createFakeData = require('./db/fakeData/createFakeData')
const handleErrors = require('./errors/request.error')
const db = require('./db/models');
const routes = require('./routes')


const kcConfig = {
   "realm": "unahur",
   "auth-server-url": "http://localhost:8080/",
   "resource": "api",
   'bearer-only': true
}

const memoryStore = new session.MemoryStore();

const app = express();
const PORT = process.env.PORT ?? 3001
const env = process.env.NODE_ENV || 'development';
app.use(express.json())
app.use(cors())

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

const keycloak = new Keycloak({ store: memoryStore }, kcConfig);
app.use(keycloak.middleware());
app.use('/', keycloak.protect(), routes)
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