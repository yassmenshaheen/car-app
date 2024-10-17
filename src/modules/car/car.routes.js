import { Router } from "express";
import * as carcontroller from './car.controller.js'

const carrouter = Router()

carrouter.post('/addcar',carcontroller.addcar)
carrouter.get('/getcars',carcontroller.getcars)
carrouter.get('/:id',carcontroller.getcarsid)
carrouter.delete('/:id',carcontroller.deletecar)
carrouter.put('/:id',carcontroller.updatecar)




export default carrouter