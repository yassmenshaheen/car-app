import { Router } from "express";
import *as specialconroller from './special.controller.js'

let specialrouter = Router()


specialrouter.get('/',specialconroller.getall)
specialrouter.get('/avilable',specialconroller.getavilable)
specialrouter.get('/avilable1',specialconroller.getavilable1)
specialrouter.get('/avilable2',specialconroller.getavilable2)


export default specialrouter

