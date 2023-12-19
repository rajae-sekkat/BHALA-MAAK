const express = require("express");
const mysql = require ("mysql");
const cors = require("cors");
const axios = require("axios");

//initialiser le serveur
const app = express();
app.use(cors());
app.use(express.json());

// connexion au base de donnes
const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : "" ,
    database : "db_projet_ppp",

})

// faire un comparaison entre les valeurs entrants par l'utillisateur et notre data base
app.post('/login', (req,res) => {
    const sql = "SELECT * FROM users WHERE `username`=? AND `password`=?";
    
    db.query(sql, [req.body.username,req.body.password], (err,data) => {
        
        if (err){
            return res.json("error");
        }
        if (data.length > 0){
             return  res.json("success");
        }else{
            return  res.json("faild");
        }
    })

})

app.listen(8081, ()=>{
   console.log('listening')
})

//voire est ce qua notre serveur est connecter a notre data base
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connexion à la base de données réussie');
    
});