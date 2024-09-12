const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
require("express-async-errors")
import router from "./routes/route";
import notFound from "./middleware/notFound"
import globalErr from "./middleware/errMiddleware"


// start middleware 
app.use(express.json())


//routes
app.use("/api/v1",router)


//end error middlewares
app.use(notFound)
app.use(globalErr)



//start server

const PORT = process.env.PORT || 3000

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect("mongodb+srv://scelogumede95:72664453@practice.kmvig.mongodb.net/TUSKS?retryWrites=true&w=majority&appName=practice", clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    app.listen(PORT,()=> console.log(`working on ${PORT}`))
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err) {
    console.error(err)
  }
}
run()



