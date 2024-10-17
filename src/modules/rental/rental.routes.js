import { Router } from "express";
import * as rentalcontroller from './rental.controller.js'

const rentalrouter = Router()

rentalrouter.post('/add',rentalcontroller.addrental)
rentalrouter.put('/:id',rentalcontroller.updaterental)
rentalrouter.delete('/:id',rentalcontroller.deleterental)





export default rentalrouter