import express from "express"
import course from "./routes/courseRoutes.js"
// import dotenv from 'dotenv'
import ErrorMiddleware from './middlewares/Error.js'
import cookieParser from "cookie-parser"
import {config} from 'dotenv'
import  cors from "cors"
config({
   path:"./config/config.env" 
})
const app= express()
// using middle ware
app.use(express.json())
app.use(express.urlencoded({
   extended:true,
}))
app.use(cookieParser())
app.use(cors({
   origin:process.env.FRONTEND_URL,
 credentials:true,
 methods:["GET","POST","PUT","DELETE"]
}))

// const router=express.Router()
//   router.route("./courses").get((req,res,next)=>{
// res.send("working server")
// })

// app.use("api/",router)
import user from "./routes/userRoutes.js"
// import payment from "./routes/paymentRoutes.js"
import others from "./routes/otherRoutes.js"

app.use("/api/v1/",course)

app.use("/api/v1/",user)
// app.use("/api/v1/",payment)
app.use("/api/v1/",others)
app.get("/",(req,res)=>res.send(`<h1>site is working <a href=${process.env.FRONTEND_URL}>Click here</a>  to visited server is running</h1>`))

export default app
app.use(ErrorMiddleware)


