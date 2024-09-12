import { CustomError } from "../error/error"

export default function (err,req,res,next){
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({message:"error occured in the server"})
}