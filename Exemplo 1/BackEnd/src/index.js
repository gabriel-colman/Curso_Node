//https://www.youtube.com/watch?v=MkkbUfcZUZM&t=440s

const express = require ('express');
const { memoryUsage } = require('process');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(require("/.routes"));


app.listen(3000);