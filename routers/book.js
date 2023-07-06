const express = require("express")
const router = express.Router();
const Book = require("../models/book")

router.get("/", async(req,res)=>{
    try {
        const books = await Book.find();
        res.json(books)


    } catch (error) {
    console.log(error)
        
    }
});

router.post("/", async (req,res)=>{
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"server error"})
        
    }
})


router.delete("/:id", async(req,res)=>{
 try {
      await Book.findByIdAndDelete(req.params.id);
      res.send("deleted")

 } catch (error) {

     console.log(error)
        res.status(500).json({error:"server error"})
 }
})

module.exports = router