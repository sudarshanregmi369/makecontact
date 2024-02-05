const {constant}= require("../constant")
const errorHandler = (request,response, next)=>{
    const statusCode = response.statusCode  ? response.statusCode : 500
    switch(statusCode){
        case constant.VALIDATION_ERROR:{
            response.json({title:"validation ",
            message:error.message,
            stackTrace:error.stack})
    };
      break;
      case constant. NOT_FOUND:{
        response.json({title:"not Found" ,
        message:error.message,
         stackTrace:error.stack})
      };
      break;
      case constant.UNAUTHORIZED:{
        response.json({title:"Unauthorized" ,
        message:error.message,
         stackTrace:error.stack})
      };
      break;
      case constant.FORBIDDEN:{
        response.json({title:"Request forbidden" ,
        message:error.message,
         stackTrace:error.stack})
      };
      break;
      case constant.SERVER_ERROR:{
        response.json({title:"server error" ,
        message:error.message,
         stackTrace:error.stack})
      };
      break;
      default:
        console.log("no error ");
        break;

    }

   
    
    };
module.exports = errorHandler;