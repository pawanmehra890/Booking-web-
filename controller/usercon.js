const UsermODEL=require('../model/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
let key="KSKKSKKSKS"


exports.Register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = await new UsermODEL({
      username: req.body.username,
      email: req.body.email,
      password: hash
    });

    await newUser.save();
    res.status(201).json({ username: newUser.username, email: newUser.email });
  } catch (error) {
    res.status(400).json({ msg: "Sorry, an error occurred" });
  }
};

exports.Login = async (req, res, next) => {
  try {
    const user = await UsermODEL.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json({ msg: "No user found" });
    } else {
      const isPasswordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordMatch) {
        res.status(401).json({ msg: "Invalid password" });
      } else {
     const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},key,{expiresIn:'10h'})

        const { password, isAdmin, ...otherDetails } = user.toObject();
        res.status(200).json({otherDetails,isAdmin,token});
      }
    }
  } catch (error) {
    next(error);
  }
};

 