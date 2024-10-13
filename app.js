const express = require("express");
const path = require("path")
const app = express()

//MIDDLEWARES
const myLogger = (req, res, next) => {
    console.log("Middleware ula");
    next()
}

const myLogger2 = (req, res, next) => {
    console.log("Middleware ulasdasd");
    next()
}

app.use(myLogger);
app.use(myLogger2);
app.use(express.static('public'))
//Static dosyaların public klasöründe olduğunu söyler.
// Bu bir middleware'dir. req-res arasında işlem yapan bir koddur.



const port = 3000;

app.get("/", (req, res)=>{

    res.sendFile(path.resolve(__dirname, 'temp/index.html'))
})





app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})