import express, { request, response } from "express";
import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import cors from 'cors'
import bookRoute from "./routes/booksRoute.js"
const app = express();

app.use(express.json())
app.use(cors())
// app.use(
//     cors({
//     origin: 'http://localhost:3000',
//     methods:['GET' ,'POST','PUT','DELETE'],
//     allowedHeaders: ['Content-type']
// }))


app.get('/' ,(request,response)=> {
    console.log(request)
    return response.status(234).send('Welcome To My Project')
} );

app.use('/books',bookRoute)



mongoose
    .connect(mongoDBURL)
    .then(() =>{
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error) => console.log(error))