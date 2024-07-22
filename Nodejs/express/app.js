const  express=require('express');//module
const app=express()//start express intialize the express

app.get('/',(req,res)=>{
    res.send("I am shaziya")
})

app.get('/name',(req,res)=>{
    const id=req.query.id
    res.send(" shaziya"+id)
})

app.get('/name/:id',(req,res)=>{
    const id=req.params.id
    res.send(" Roll No" +id)
})

app.listen(5000,(req,res)=>{
    console.log("hello world")

});

