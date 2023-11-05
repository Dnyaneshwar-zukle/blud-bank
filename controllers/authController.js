const userModule = require("../models/userModule");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// register to callback function
const registerController = async(req,res) => {
    try {
        const existingUser = await userModule.findOne({email:req.body.email})
       // validation
        if(existingUser){
            return res.status(200).send({
                success:false,
                massage:'user already exists'
            })
        }
        // compare
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.Password,salt)
        req.body.Password = hashedPassword
        // rest data
        const user = new userModule(req.body)
        await user.save()
        return res.status(201).send({
            success:true,
            massage:'user rigister Successfuly'
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            massage:"Error In Register API",
            error: error.message
            
        });
    }
}


// login callback
const loginController = async(req,res) => {
   try {
    const user = await userModule.findOne({email: req.body.email});
    if(!user){
        return res.status(404).send({
            success:false,
            massage:'User Not Found'
        })
    }
    //compare
    const comparePassword = await bcrypt.compare(
         req.body.Password,
         user.Password
        );
    if(!comparePassword){
        return res.status(401).send({
            success: false,
            massage: 'Invalid Credentials'
        });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });    
    return res.status(200).send({
        success:true,
        massage:'Login Successfully',
        token,
        user
    });
   } catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        massage: 'Error In Login API'
    });    
   }
}

module.exports = {
    registerController,
    loginController
};
