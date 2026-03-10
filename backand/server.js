const express = require ('express');
const mysql = require('mysql2');
const cors = require ('cors');
const {express} = require ('node:dns');

const app = express ();
app.use(cora());
app.use(express.json());

//Criar conecxão com o banco 
const conexão = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database: 'escola'
    } 
);

//Criar rota para aluno 
app.post("/salvar", (req,res,)=>{
    let nome= req.body.name;
    let idade= req.body.idade;
    let sql= "INSERT INTO alunos (nome, idade) VALUES (?,?)";
    conexão.query(sql, [nome, idade], (erro,
        resultado)
        if(erro){
            console.log(erro);
  }else{
            res.send("Aluno salvo com sucesso")
}
        });

