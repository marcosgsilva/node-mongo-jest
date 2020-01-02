const express = require("express");
const app = express();
const smartphone = require("./routes/smartphone.route");
const port = 8000;
const mongoose = require("mongoose");
let url = 'mongodb://localhost:27017/local';

let mongoDB = process.env.MONGO_URI || url;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("Error", console.error.bind(console, "Erro na ligação com o Banco de dados"));

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use("/smartphones", smartphone);

module.exports =app;

// app.listen(port, ()=>{
//     console.log("Servidor em execução na Porta"+port);
// });
