const mongoose = require("mongoose");
const clientSchema = mongoose.Schema({
  name: String,
  email: { 
    type:String,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  mobile: String,
  notes: String,
  addressDetails: {
    apartment: String,
    address: String,
    zipCode: Number,
  },
  cardetails: {
    cardId: Number,
    tokenId: Number,
    lastFourDigits:{type:Number,
    min:[4,"Exact four digit needed"]
    }
    
  },
});

const model = mongoose.model("Client", clientSchema);
module.exports = model;
