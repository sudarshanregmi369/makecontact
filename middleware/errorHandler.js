const errorHandler = (request,response, next)=>{
    const statusCode = response.statusCode  ? response.statusCode : 500
    response.json({message:error.message, stackTrace:error.stack})
    };
module.exports = errorHandler;