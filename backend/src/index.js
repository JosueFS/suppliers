const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Desenvolvimento
app.use(cors());

//Produção
// app.use(cors({
//     origin: 'http://.........'
// }));

app.use(express.json());
app.use(routes);

app.listen(3333);