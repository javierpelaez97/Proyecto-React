const Book = require("../models/book.model")

async function findAll(req,res){
    try{
        const books = await FileSystem.find()
        return res.json(books)
    } catch(error){
        console.log(error)
        return res.status(500).json({msg:"error al buscar los libros"})
    }
}

async function insert(req,res){
    try{
        const newBook = new Book({
            title: req.body.title,
            year: req.body.year,
            autor: req.body.autor,
            description: req.body.description,
            category: req.body.category,
        })

        await newBook.save()
        return res.json({msg:"Libro guardado"})
    }catch(error){
        console.log(error)
        return res.status(500).json({msg:"error al guardar el Libro"})
    }
}

async function deleteOne(req,res){
    try{
        await Book.findByIdAndDelete(req.params.id)
        return res.json({msg: "Libro eliminado"})
    }catch(error){
        console.log(error)
        return res.status(500).json({msg: "Error al eliminar el Libro"})
    }
}

module.exports = {
    findAll,
    insert,
    deleteOne,
}