const fsPromises = require("fs/promises");

const getUsers = async(req,res)=>{

    res.status(501);
    res.json({
        status:'work in progress..........',
        
       
    })
}

const postUsers = async(req, res)=>{
 
    res.json({
        status:'success',
        results:1,
    })
}

const putUsers = async (req,res)=>{

        res.json({
            status:'success',
            results:1,
          
        })
}

const deleteusers  = async (req,res)=>{

    res.json({
        status:'success',
      
    })
}


module.exports = {
   getUsers,
   postUsers,
   putUsers,
   deleteusers,
}