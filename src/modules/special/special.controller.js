import { db1 } from "../../../yassmen-tuesday-10-4-assi7-01010665266/database/connection.js"

export const getall = async(req,res)=>{
    const getcars = await db1.collection('cars').find({

        model: { $in:['honda','toyota']},
    
    }).toArray()
    res.json({message:"done",getcars})
}

export const getavilable = async(req,res)=>{
    const getavilable = await db1.collection('cars').find({
        model: req.query.model,
        rentalstatus:'avilable'
    }).toArray()
    res.json({message:"done",getavilable})
}

export const getavilable1 = async(req,res)=>{
    const {model } =req.query
    let cars ;
    if(model){
     cars=  await db1.collection('cars').find({
            model: req.query.model
        }).toArray()
    }
    else{
    cars = await db1.collection('cars').find({
            rentalstatus:'rented'
        }).toArray()
    }
    res.json({message:"done" , cars})


}

export const getavilable2 = async(req,res)=>{
    const {model} = req.query
    const cars = await db1.collection('cars').find(
        {$or: [{rentalstatus:'avilable',model},{rentalstatus:'rented',model}]}
    ).toArray()
    res.json({message:"done",cars})
}