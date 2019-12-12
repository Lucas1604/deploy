const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello Heroku!');
})

app.get('/users', (req, res) =>{
    res.send('Hello Users!');
})

app.listen(8888, () => {
    console.log('Rodando com sucesso! :)')
})