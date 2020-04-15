const express = require('express');
const app = exports();
//para importar el usuario
app.use(require('./usuario'));
app.use(require('./login'));



module.exports = app;