
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const booksRoutes = require("./routes/book.routes")


const app = express()
app.use(cors())

app.use(express.json())


mongoose.connect('mongodb+srv://javierpelaezgimenez:Pelaez991997@cluster0.fezmw1p.mongodb.net/libros')
.then(()=>{
    console.log(`Conexion con la base de datos exitosa`)
})
.catch((err)=>{
    console.log(`Error al conectar con la base de datos: ${err}`)
})

app.use("/api/users", userRoutes)
app.use("/api/books", booksRoutes)

app.listen(3000, ()=>{
    console.log(`API funcionando.. en el puerto 3000`)
})