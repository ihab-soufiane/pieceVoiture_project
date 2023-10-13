require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")


// DB Connection
mongoose.set('strictQuery', false); 
mongoose.connect(process.env.database,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to Database ....")
}).catch((err)=>{
    console.log(err,"you have an error ")
})

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 ,// For legacy browser support
    methods: "GET, PUT ,POST , DELETE"
}

//use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors(corsOptions))

// Import Routes

const userRoutes = require("./routes/user")
const productRoutes = require('./routes/product')
const adminRoutes = require("./routes/admin")
const cartRoutes = require("./routes/cart")


// use routes
app.use("/api",userRoutes)
app.use("/product",productRoutes)
app.use("/admin",adminRoutes)
app.use("/cart",cartRoutes)


app.use("/getimage",express.static('./uploads'));




const port = process.env.PORT || 5000


app.listen(port , (err) => {
    try {
        console.log(`your server is running on port ${port}`)
    } catch (err) {
        console.log("server connection faild at ",err)
    }
})