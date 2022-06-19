const model = require("../model/index")
const asyncHandler = require("express-async-handler");
const createCLient = asyncHandler(async(req,res)=>{
try {
    const {name, email, mobile, notes,addressDetails,
      cardetails}= req.body;
    const client =await model.create({
     name,email,mobile,notes,addressDetails,
     cardetails

    })
    if(client){
        res.status(200).json(client)
        const result = client.toJSON();
        console.log(result);
    }

   
      
    
} catch (error) {
    
    res.json(error.message)
}

    
})


const getAllClients = async(req,res)=>{
   try {
    const result= await model.find({})
    if(result){
        res.status(200).json(result)
    }
   } catch (error) {
    console.log(`${error.message}`);
   }

}


const getClientById = async(req,res)=>{
    try {
     const result= await model.find({_id:req.params.id})
     if(result){
         res.status(200).json(result)
     }
    } catch (error) {
     console.log(`${error.message}`);
    }
 
 }


module.exports = {createCLient,getAllClients,getClientById};