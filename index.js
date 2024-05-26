//importing space
import express from "express";


//declaration/initialization space
const app = express();
const PORT = 4000;


//middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    //res.status(200).json({message:"Hi all welcome to our first node app"})
    res.status(200).send(`<span style="background-color:aqua;color:black;font-size:100px">Welcome to our first nodejs app</span>`)
})

app.get('/data',(req,res)=>{
    res.status(200).send(`<span style="background-color:aqua;color:black;font-size:100px">Welcome to our first nodejs app</span>`)
})


app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`);
})