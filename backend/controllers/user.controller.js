const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

async function login(req,res){
    try{
        const foundUser = await User.findOne({email:req.body.email})
        if(!foundUser){
            return res.status(400).json({msg: "Credenciales no validas"})
        }
        else{
            const resultCompare = await bcrypt.compare(req.body.password, foundUser.password)
            if(!resultCompare){
                return res.status(400).json({msg: "Credenciales no validas"})
            }else{
                const token = jwt.sign({userId: foundUser._id}, "DXdd21@ace4",{expiresIn:'1h'})
                return res.status(200).json({msg: "ok", token: token})
            }
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({msg:"error al acceder"})
    }
}

async function singup(req,res){
    try{
        const hash = await bcrypt.hash(req.body.password, 10)
        const newUser = new User ({email:req.body.email, password:hash, role: 'user', name: req.body.name})
        await newUser.save()
        return res.json({msg:"registro correcto"})
    }catch(error){
        console.log(error)
        return res.status(500).json({msg:"error al registrar"})
    }
}

module.exports = {
    login,
    singup
}