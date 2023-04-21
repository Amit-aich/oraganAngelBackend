const mongoose = require('mongoose');
const { Schema } = mongoose;
const HospitalsSchema= new Schema({
    hospitalName:{
        type: 'string',
        required: true,
    },
    location:{
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    mobile:{
        type: 'string',
        required: true,
    },
    organ:{
        type: 'string',
        required: true,
    },
})
const Hospitals=mongoose.model('hospitals',HospitalsSchema);
module.exports=Hospitals;
