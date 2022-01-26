const express = require("express");
const app = express();
const mysql =  require("mysql");
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"password",
    database:"crudgames",
});

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=> {
    let sql = "INSERT INTO games (name, cost, category) VALUES ('Far Cry 5',  '120', 'Acao')";
    db.query(sql, (err, result) => {
        console.log(err);
    })
});

app.post("/register", (req, res) =>{
    const {name} = req.body;
    const {cost} = req.body;
    const {category} = req.body;

    let SQL = "INSERT INTO games (name, cost, category) VALUES (?, ?, ?)";
})

    
app.listen(3001, () => {
    console.log("rodando servidor")
})
