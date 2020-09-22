
const {Router}=require('express');
const router = Router();
const fs = require('fs');

// leer el archivo json fileSystem
const moviesFile= fs.readFileSync("./movies.json","utf-8");
let movies = JSON.parse(moviesFile);
// básico
router.get("/",(req,res)=>{
    res.json("API-JSON-CRUD POLIJIC");
});

module.exports=router;
