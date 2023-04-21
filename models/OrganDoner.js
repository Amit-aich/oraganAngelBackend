const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrganDonerSchema= new Schema({
    user: { 
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    hospital:{
        type: 'string',
        required: true,
    },
    familymember:{
        type: 'string',
        required: true,
    },
    organ: {
        type: 'string',
        required: true,
    },
})
const Doners=mongoose.model('organDoner',OrganDonerSchema);
module.exports=Doners;
