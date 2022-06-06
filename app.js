const express = require('express');
const app = express();
const indexRouter = require('./routes/main')

app.listen(3000, ()=>{

 console.log('Servidor funcionando');
    });

app.set('view engine', 'ejs');
app.use('/', indexRouter);