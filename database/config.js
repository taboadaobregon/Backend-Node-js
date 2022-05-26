//PARA ESTABLECER LA CONEXION
const mongoose = require('mongoose');

//VARIABLES DE ENTORNO
require('dotenv').config();

const dbConnection = async() => {
    //el await ba a esperar que todo pase para que recie se ejecute
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("DB Online");

    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de conectar ala BD');

    }

};

//ACA EXPORTAMOS LA DB CONNECTION PARA PODER UTILIZARLO EN CONFIG.JS
module.exports = {
    dbConnection
}