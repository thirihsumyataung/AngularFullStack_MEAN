
function errorHandler(err, req, res, next){
    if(err.name === "UnauthorizedError") {
        //JWT Authorization error
        return res.status(401).json({message: 'The user is not authorized.'}); 
    }
    if(err.name === 'ValidationError'){ 
        // VAlidation Error
        return res.status(401).json({message: err}); 
    }

    //General Error
    return res.status(500).json(err); 
} 

module.exports = errorHandler; 