const { request } = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { Error } = require("mongoose");
const validateToken = asyncHandler(async(request,response, next))=> {
    let token;
    let authHeader = request.headers.Authorization || request.headers.authorization;
    if(authHeader && authHeader.startsWith( "Bearer")){
        token =  authHeader.split("")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET(err,decoded))=>{
            if(err){
                response.status(403).Json({error: 'Invalid'})
            }
        }
        request.user= decoded.user;
        next();
}
if(!token){
    response.status(401);
    throw new Error("no token is send")
}
}
module.exports=validateToken;