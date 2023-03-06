const jwt=require('jsonwebtoken')
let key="KSKKSKKSKS"

exports.VerifyToken = async (req, res, nxt) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      try {
        const decode = jwt.verify(token, key);
        req.user = decode;
        console.log(req.user);
        nxt();
      } catch (error) {
        res.status(401).json({ msg: "You are not authorized" });
      }
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  };
  


  exports.Adminmiddleare=async(req,res,nxt)=>{
    const Admin=req.user.isAdmin
    if(Admin){
        nxt()
    }
    else{
        return res.status(404).json({user:"unauthorised"})
    }

   
    

  } 


  exports.Usermiddleare=async(req,res,nxt)=>{
    const Admin=req.user.isAdmin
    if(!Admin){
        nxt()
    }
    else{
        return res.status(404).json({user:"unauthorised"})
    }

   
    

  } 