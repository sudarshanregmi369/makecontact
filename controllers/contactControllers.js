const express = require("express")

const asyncHandler = require("express-async-handler")
const contact = require("../models/contactModel")

// get all the contact
const getContacts = asyncHandler(async (request, response)=>{
    const contacts =  await contact.find({user_id: request.user.id});
    response.status(200).json({contacts})
});

// create new contact
// post/api request  
const createContact = asyncHandler(async (request, response)=>{
    console.log("the new respone",request.body)
    const{name,email,phone}= request.body;
    if (!name || !email || !phone){
        return response.status(500).json({"messag":"Error"})
        throw new Error("All fields are mandatory")
    }
    const contactss  = await contact.create({
        name,
        email,
        phone,
        user_id:request.user.id,
    });
    response.status(200).json({contact})
})

//get contact
//post /api/contact/id
const getContact= asyncHandler( async (request, response)=>{
    const contacte = await contact.findById(request.params.id)
    if (!contacte){
        throw new Error("no contact found ");
    }
    response.send(contacte)
});
//update the contact
//put
const updateContact = asyncHandler(async(request, response)=>{
    const contactU = await contact.findById(request.params.id)
    if (!contactU){
        throw new Error("no contact found ");
    }
    response.send(contactU)
    const updatedContact = await contact.findByIdAndUpdate(
        request.params.id,
        request.body,
        {new: true}
    )
    
    response.send(updatedContact)
});

// contact 
//post/api/contact /id 
const deleteContact = asyncHandler (async(request, response)=>{
    const contactDelete = await contact.findById(request.params.id)
    if (!contactU){
        throw new Error("no contact found ");
    }
    response.send(contactDelete);
   
});
module.exports={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}