const express = require("express")

const asyncHandler = require("express-async-handler")

// get all the contact
const getContacts = asyncHandler(async (request, response)=>{
    response.status(200).json({message:"Get all contact"})
});

// create new contact
// post/api request  
const createContact = asyncHandler(async (request, response)=>{
    console.log("the new respone",request.body)
    const{name,email}= request.body;
    if (!name || !email){
        return response.status(500).json({"messag":"Error"})
        // throw new Error("All fields are mandatory")
    }
    response.status(200).json({message:"create contact "})
})

//get contact
//post /api/contact/id
const getContact= asyncHandler( async (request, response)=>{
    response.send(`Message updates ${request.params.id}`)
});
//update the contact
//put
const updateContact = asyncHandler(async(request, response)=>{
    
    response.status(200).json({message:`update contact ${request.params.id}`})
});

// contact 
//post/api/contact /id 
const deleteContact = asyncHandler (async(request, response)=>{
    response.send(`Delete contact  with id:${request.params.id}`);
});
module.exports={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}