import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');


  export function connection(){
    client.connect().then(()=>{
        console.log('Connected successfully to server');
    })
    .catch(()=>{
        console.log("database error");
    })

  } 

  export const db1 = client.db("ass7")

   


export const db = client.db('routee')