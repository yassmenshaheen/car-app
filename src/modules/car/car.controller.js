import { ObjectId } from "mongodb"
import { db1 } from "../../../yassmen-tuesday-10-4-assi7-01010665266/database/connection.js"

export const addcar = async(req,res)=>{
    let {name,model,rentalsatatus} = req.body
    const addcar = await db1.collection('cars')
    .insertOne({name,model,rentalstatus:'avilable'})

    res.json("add car successfully")
}
export const getcars = async(req,res)=>{
    const getcars = await db1.collection('cars')
    .find().toArray()
    res.json({message:"done",getcars})
}
export const getcarsid = async(req,res)=>{
    const getcarsid = await db1.collection('cars')
    .findOne({_id : new ObjectId(req.params.id)})
    res.json({message:'done',getcarsid})
}
export const deletecar = async(req,res)=>{
    const {carid} = req.body
    const {id} = req.params
    if (carid!= id){
      res.json("not deleted")
    } 
  
    const deletecar = await db1.collection('cars').
    deleteOne({_id:new ObjectId(carid)})
    res.json("deleted successfully")
}
export const updatecar= async(req,res)=>{
    const {name,model} = req.body
    const {id} = req.params
    
  
    const updatecars = await db1.collection('cars').
    updateOne({_id:new ObjectId(id)},{
      $set:{name,model}
    })
    res.json("updated successfully")
  }