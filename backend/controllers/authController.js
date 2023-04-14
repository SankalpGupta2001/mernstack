import User from '../models/userModel.js'
import express from "express";
const router = express.Router();
import generateToken from '../utils/generateToken.js';
import CryptoJs from 'crypto-js';

router.post("/register",async(req,res) => {
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone
    })
    try{
        const user = await newUser.save();
        res.status(201).json(user);
    }
    catch (err){
        res.status(500).json(err);
    }
});
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Wrong password or username!");
  
      const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJs.enc.Utf8);
      originalPassword !== req.body.password &&
        res.status(401).json("Wrong password or username!");
  
  
      const { password, ...info } = user._doc;
  
      res.status(200).json({ ...info, token:generateToken });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
export default router;