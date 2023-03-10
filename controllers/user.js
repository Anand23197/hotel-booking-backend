import User from "../models/User.js";

//we already have register function that's way we are not gonna create user 


//UPDATE
export const updateUser = async (req, res, next)=>{
    try{
        //we are doing new true so that it will no return old value it will update new value
          const updatedUser = await User.findByIdAndUpdate(req.params.id, { 
            $set : req.body}, 
            {new : true}); 
            res.status(200).
            json(updatedUser);
       }catch(err){
           res.status(500).json(err)
       }
}

//DELETE HOTEL
export const deleteUser = async (req, res, next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
         res.status(200).json("User has been deleted");
 }catch(err){
         res.status(500).json(err)
     }
}

//GET
export const getUser = async (req, res, next)=>{
    try{
        const hotel = await User.findById(req.params.id)
        res.status(200).json(hotel);
}catch(err){
        res.status(500).json(err)
    }
}

//GET ALL HOTELS
export const getUsers = async (req, res, next)=>{
    try{
        const user = await User.find();
        res.status(200).json(user);
     }catch(err){
      next(err);
    }
}