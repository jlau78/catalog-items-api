import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import itemRoutes from "./routes"

const app: Express = express()

const HOST: string = process.env.HOST || "localhost"
const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(itemRoutes)

const uri: string = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}
                        ?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri) //, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://${HOST}:${PORT}`)
        )
    )
    .catch(error => {
        // throw error
        console.log(`Error. Fail to connect to the mongodb: ${error.message}`)
    })