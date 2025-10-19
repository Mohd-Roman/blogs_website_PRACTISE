import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import connectdb from './Database/db.js'
import userRoute from './routes/user.routes.js'


dotenv.config()
const app = express()

//middle..
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/user',userRoute)


const PORT = process.env.PORT

app.get('/',(req,res)=>{
    console.log(`app`)
})
app.listen(PORT,(req,res)=>{
    connectdb()
    console.log(`ser ver started ${PORT} `)
})