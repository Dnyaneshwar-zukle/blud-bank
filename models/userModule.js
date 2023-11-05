const mongoose = require(`mongoose`)

const userSchema = new mongoose.Schema({
    role:{
       type:String,
       requre:[true, 'Role is require'],
       enum:['admin','orginisation','user','hospital']
    },
    name:{
        type:String,
        require:function(){
            if (this.role === 'user' || this.role === 'admin'){
               return true
            }
            return false
        }
    },
    orginisationName:{
        type:String,
        require:function(){
            if (this.role === 'orginisation'){
               return true
            }
            return false
        }
    },
    hospitalName:{
       type:String,
       require:function(){
        if (this.role === 'hospital'){
            return true
        }
        return false
       }
    },
    email:{
        type:String,
        require:[true, 'email is require'],
        unique:true
    },
    Password:{
        type:String,
        require:[true, 'Password is required']
    },
    website:{
        type:String
    },
    adress:{
        type:String,
        require:[true, 'adress is require']
    },
    phone:{
        type:String,
        require:[true, 'phone number is require']
    }
}, {timestamps:true});
module.exports = mongoose.model('users', userSchema)
