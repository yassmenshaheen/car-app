import { hashSync } from "bcrypt";
import { db1 } from "../../database/connection.js"
import bcrypt from 'bcrypt'
import { ObjectId } from "mongodb";
export const signup = async(req,res)=>{

    const {name,email,password,phone} = req.body
    const checkemail = await db1.collection('customer')
    .findOne({ email });
    if(checkemail){
      return  res.json("email exist")
    }

    const hashpassword =bcrypt.hashSync(password,8)
    req.body.password = hashpassword
    await db1.collection('customer').insertOne(req.body)
    res.json("add customer successfully")
}

export const login = async(req,res)=>{
    const {email,password} = req.body
    const checkemail = await db1.collection('customer')
    .findOne({ email });
    if(!checkemail){
      return  res.json("email not exist")
    }

    const chechpassword = bcrypt
    .compareSync(password,checkemail.password)
    if(!chechpassword){
      res.json("password invaild")
    }
    res.json("login successfully")
    
    
}

export const getcustomers = async(req,res)=>{
  const getcustomer = await db1.collection('customer').find().toArray()
  res.json({getcustomer})
}
export const getcustomerid = async(req,res)=>{
  const getcustomerid = await db1.collection('customer').
  findOne({_id:new ObjectId(req.params.id)})
  res.json({getcustomerid})
}

export const deletecustomer = async(req,res)=>{
  const {customerid} = req.body
  const {id} = req.params
  if (customerid!= id){
    res.json("not deleted")
  } 

  const deletecustomer = await db1.collection('customer').
  deleteOne({_id:new ObjectId(customerid)})
  res.json("deleted successfully")
}
export const updatecustomer = async(req,res)=>{
  const {customerid,name,phone} = req.body
  const {id} = req.params
  if (customerid!= id){
    res.json("not updated")
  } 

  const updatecustomer = await db1.collection('customer').
  updateOne({_id:new ObjectId(id)},{
    $set:{name,phone}
  })
  res.json("updated successfully")
}

