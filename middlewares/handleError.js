const handleError = (err,req,res,next) =>{

    console.log("constrollo gestione errori interni al server");

    res.statusCode = 500;
    res.json({
        error:true,
        message : "errore interno al server"
    });
    
}

module.exports = handleError;