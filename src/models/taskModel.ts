import mongoose,{Schema,Document} from "mongoose"

interface Utask extends Document{
    task:string,
    completion:boolean
}


const taskSchema:Schema = new Schema({
    task : {
        type:String,
        required:true
    },
    completion:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model<Utask>("task",taskSchema)