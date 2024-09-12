import Task from "../models/taskModel"
import { createCustomError } from "../error/error"


export const createTask =async (req,res)=>{
    const createdTask = await Task.create(req.body)
    res.status(201).json({createdTask})
}

export const getAllTasks = async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({data:tasks})
}

export const deleteTask = async(req,res,next)=>{
    const taskDeleted = await Task.findByIdAndDelete({_id:req.params.id})
    if(!taskDeleted){
        return next(createCustomError("theres is no such task",404))
    }
    res.status(200).json({data:taskDeleted})
}

export const getOneTask = async(req,res,next)=>{
    const task = await Task.findById({_id:req.params.id})
    if(!task){
        return next(createCustomError("the id you entered doesnt exist",404))
    }
    res.status(200).json({data:task})
}

export const updateOneTask = async(req,res,next)=>{
    const taskUpdated = await Task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    if(!taskUpdated){
        return next(createCustomError("the task you want to update doesn't exist",404))
    }
    res.status(201).json({data:taskUpdated})
}

