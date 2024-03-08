const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require( "jsonwebtoken" )

// get all the contact
// register the user
const registerUser = asyncHandler(async (request,response)=>{
    const {username, password,email  }=request.body;
    if(!username || !password || !email) {
        return response.status(400).json({message:"Please provide username and password"})
    }
    
    // check if user already exists
    const userAvailable = await User.findOne({email})
    if (userAvailable){
        return response.status(400).json({message:"user is already registered"}) 
    }
    //hash password 
    const hashPassword = await bcrypt.hash(password,20);
    console.log("Hashed Password ", hashPassword);
    const user = await User.create({
        username,
        email,
        password:hashPassword,

    })
    console.log(`user created successfully ${user}`)
    if (user ){
        response.status(201).json({_id :user.id,
        email:user.email
    })
}
    else
    {
        response.status(500).json({message:'Error creating'})
    }
    
    
    response.json({message:"register the user"})
});


//login the user 
const loginUser = asyncHandler(async (request,response)=>{
    const {email, password}=request.body;
    if(!email|| !password) {
        return response.status(400).json({message:"Please provide username and password"})
    }
    const user = await User.findOne( {email} )
    //compare password with hashpassword
    if (user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            },
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'15m'})
        response.status(200).json({accessToken})
    }
    else{
        response.status(401).json({message:"email and password are not valid"})
    }

});
//current user 
const currentUser = asyncHandler(async (request,response)=>{
    response.json(request.user)
})

module.exports = {registerUser,loginUser, currentUser}
