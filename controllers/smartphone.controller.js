const SmartPhone = require("../models/smartphone.model");

exports.test = function (req, res) {
    res.send("Olá teste ao controller");
};

exports.create = function (req, res) {
    console.log(req);
    let smartPhone = new SmartPhone({
        nome: req.body.nome,
        marca: req.body.marca
    });
    smartPhone.save(function (err) {
        if(err){
                next(err);
        }
        res.send(`Registro de SmartPhone Criado com sucesso`);
    })
};

exports.details = function (req, res) {
        SmartPhone.findById(req.params.id, function (err, smartphone) {
                if (err) return next(err);
                res.send(smartphone);
        })
};