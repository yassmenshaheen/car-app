import { Router } from "express";
import * as customercontroller from './customer.controller.js'

const customerrouter = Router()

customerrouter.post('/signup',customercontroller.signup)
customerrouter.post('/login',customercontroller.login)
customerrouter.get('/getcustomer',customercontroller.getcustomers)
customerrouter.get('/:id',customercontroller.getcustomerid)
customerrouter.delete('/:id',customercontroller.deletecustomer)
customerrouter.put('/:id',customercontroller.updatecustomer)






export default customerrouter