// get all the contact
const getContacts = (request, response)=>{
    response.status(200).json({message:"Get all contact"})
}

// create new contact
// post/api request  
const createContact =(request, response)=>{
    console.log("the new respone",request.body)
    const{name,email}= request.body;
    if (!name || !email){
        return response.status(500).json({"messag":"Error"})
        throw new Error("All fields are mandatory")
    }
    response.status(200).json({message:"create contact "})
}

//get contact
//post /api/contact/id
const getContact=(request, response)=>{
    response.send(`Message updates ${request.params.id}`)
}
//update the contact
//put
const updateContact =(request, response)=>{
    
    response.status(200).json({message:`update contact ${request.params.id}`})
}

// contact 
//post/api/contact /id 
const deleteContact =(request, response)=>{
    response.send(`Delete contact  with id:${request.params.id}`);
}
module.exports={
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}