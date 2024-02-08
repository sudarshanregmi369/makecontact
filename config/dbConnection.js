const mangoose = require("mangoose");

const connectDb= async ()=>{
    try{
        const connect = await mangoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected",
        connect.connection.host,
        connect.connection.name 
        );
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDb;