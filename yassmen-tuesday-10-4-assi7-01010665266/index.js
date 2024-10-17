import express from 'express'
import { connection } from './database/connection.js'
import carrouter from './modules/car/car.routes.js'
import customerrouter from './modules/customer/customer.routes.js'
import rentalrouter from './modules/rental/rental.routes.js'
import specialrouter from './modules/special/special.routes.js'
connection()


const app = express()
const port = 3000

app.use(express.json())
app.use('/car',carrouter)
app.use('/customer',customerrouter)
app.use('/rental',rentalrouter)
app.use('/special',specialrouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))