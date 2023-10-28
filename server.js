import express from 'express';
import dotenv from "dotenv";

dotenv.config(
    {
        path: './.env', // Path to .env file (relative to the current working directory)
    }
)
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;  

//Routes
app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.listen(3000, (()=>{
    console.log("Server is running on port 3000");
}))



