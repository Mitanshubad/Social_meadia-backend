const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authController = require("./controllers/authController")
const userController = require("./controllers/userController")
const postController = require("./controllers/postController")
const commentController = require("./controllers/commentController")
const uploadController = require("./controllers/uploadController")

const app = express()


const connectToDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://socialmedia123:socialmedia321@cluster0.khsivuk.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        });
        console.log("Database connected successfully");
        // Start the server after the database connection is established
       
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

connectToDatabase() ;
app.use(cors())
app.use(express.json())
app.use('/images',express.static('public/images'))
app.use(express.urlencoded({extended:true}))
app.use('/auth',authController)
app.use('/user',userController)
app.use('/post',postController)
app.use('/comment',commentController)
app.use('/upload',uploadController)

//connect backend app
app.listen(5000,()=>{
    console.log(`server running on 5000`)
})
