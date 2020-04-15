// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

///////////entorno
Process.env.NODE_ENV = process.env.NODE_ENV || 'dev';




///////VENCIMIENTO DEL TOKEN
///60 SEGUNDOS 60 MINUTOS 24 HORAS 30 DIAS
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 ** 30;


////////////////SEED AUTENTCACION

// como no queremos que en git se vea que esta es nuestra semilla se iguala 
process.env.SEED = process.env.SEED || 'este es el seed de desarrollo';




////////base de datos

let urlDB;