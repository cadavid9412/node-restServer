const express = require('express');

const bcrypt = require('bcrypt'); //libreria para ecriptar contraseña
const jwt = require('jsonwebtoken'); //token web libreria

const Usuario = require('../models/usuario');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body; //recibe el body que se pide en postman
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        //email invalido
        if (!usuarioDB) {

            return res.status(400).json({
                ok: false,
                err: {
                    message: 'usuario o contraseña incorrectos'
                }
            });
        }
        //permite saber si hace match las contraseñas con la base de datos
        if (!bcrypt.compareSync(body.password, )) {
            return res.status(400).json({
                oko: false,
                err: {
                    message: 'Usuario o contraseña incorrecta'
                }
            });
        }
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresiN: process.env.CADUCIDAD_TOKEN });
        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        })
    })



    res.json({
        ok: true,

    });
});

module.exports = app;