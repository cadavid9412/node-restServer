const express = require('express');

const bcrypt = require('bcrypt'); //libreria para ecriptar contraseña
const _ = require('underscore');

const Usuario = require('../models/usuario');
const { verificaToken } = require('../middlewares/autenticacion');
const app = express();

app.get('/usuario', verificaToken, (req, resp) => {
    return resp.json({
        usuario: req.usuario,
        nombre: req.usuario.nombre,
        email: req.usuario.email,
    })

    let desde = req.query.desde || 0;
    desde = number(desde);

    let limite = req.query.limite || 5;
    limite = number(limite);

    Usuario.find({ estado: true }, 'nombre de estado')
})

app.post('/usuario', )