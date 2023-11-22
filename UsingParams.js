const express=require("express")
const app=express()
const port=7000





app.get('/products',(req,res)=>{
    res.send("The products Available")
})



app.get('/products/:items',(req,res)=>{
   const { items }=req.params

switch (items) {
    case "laptop": res.send("shown all laptop items")
        break;

    case "mobile":res.send("shown all mobile items")
    break;
    case "watches": res.send("shown all watches items")
    break;

case "headphones":res.send("shown all headphones items")
 break;

    default: res.send("All products")
        break;
}




})

app.listen(port,()=>{
    console.log("Running..",port)
})