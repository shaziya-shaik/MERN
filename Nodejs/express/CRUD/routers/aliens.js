
const express = require('express')
const router=express.Router()
const Alien=require('../modules/alien')


router.get('/',async(req,res)=>{
    try{
        const aliens=await Alien.find()
        res.json(aliens)
    }
    catch(err){
    res.send("error"+err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        res.json(alien)
    }
    catch(err){
    res.send("error"+err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        alien.subScription=req.body.subScription
        const a1=await alien.save()
        res.json(a1)
    }
    catch(err){
        res.send("error"+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
     
        const alien = await Alien.findByIdAndDelete(req.params.id);
        res.json(alien)
    }
    catch(err){
        res.send("error"+err)
    }
})

router.post('/' , async(req,res)=>{
    const alien=new Alien({
    name:req.body.name,
    tech:req.body.tech,
    subScription:req.body.subScription

    })
    try{
       const a1=await alien.save()
       res.json(a1)
    }
    catch(err){
        res.send("error"+err)
    }
    

})

module.exports=router