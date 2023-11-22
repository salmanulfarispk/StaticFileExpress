const express=require("express")
const app=express()
const port=2000
const path=require("path")


app.use(express.static('public'))

app.get('/loginpage',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})



app.listen(port,()=>{
    console.log("Running...",port)
})
