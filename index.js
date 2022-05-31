//variables de entorno
require('dotenv').config();
const express = require('express');
//Cors para validar que si se usa un dominio diferente lo corrija
const cors = require('cors');
const { dbConnection } = require('./database/config');
//crear el servidor de express
const app = express();
app.use(cors());
//base de datos
dbConnection();
//3q8IWkzv1LmAoupt
//andres28
console.log(process.env);
app.get('/api/usuarios', (req, res) => {
    res.status(200).json({
        ok: true,
        usuarios: [{
            id: 2,
            nombre: 'Andres taboada'
        }]
    })

})

//Es aca donde nos va a eschuchar 
app.listen(process.env.PORT, () => {
    console.log("el puerto es corriendo " + process.env.PORT);
})