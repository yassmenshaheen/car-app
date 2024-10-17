import { ObjectId } from "mongodb"
import { db1 } from "../../database/connection.js"

export const addrental = async(req,res)=>{
    const{customerid,carid,rentaldate,returndate} = req.body
    const checkcust = await db1.collection('customer')
    .findOne({_id:new ObjectId(customerid)})
    if(!checkcust){
       return res.json("customer not exist")
    } 
    let checkcar = await db1.collection('cars')
    .findOne({_id:new ObjectId(carid)})
    if(!checkcar){
        res.json("car not exist")
    }

    if(checkcar.rentalstatus != 'avilable'){
        res.json("car not avilable")
    }

    const updatecar = await db1.collection('cars').updateOne({_id:new ObjectId(carid)}
    ,{$set :{rentalstatus:"rented"}})

    const add = await db1.collection('rental')
    .insertOne({
        customerid:new ObjectId(customerid),
        carid : new ObjectId(carid),
        returndate : new Date(rentaldate),
        rentaldate : new Date(rentaldate)
    })

    res.json("created")
}
export const updaterental = async(req,res)=>{
    const {id} =req.params
    const {rentaldate,returndate} = req.body
    const update = await db1.collection('rental').updateOne({_id:new ObjectId(id)},
    {$set:{rentaldate,rentaldate}})
    res.json("updated scussefully")
}
export const deleterental = async(req,res)=>{
    const {id} =req.params
    const deleterental = await db1.collection('rental').deleteOne({_id:new ObjectId(id)},)
    res.json("deleted scussefully")

}