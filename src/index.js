const express =require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extends: false}));
app.use(express.json());

app.use(require('./routers/index'));

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>{
    console.log('server on port 3000');
});