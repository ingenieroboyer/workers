const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//conecto DB
const mongoose = require('mongoose');

//para evitar el mensaje de depredicate


//import config,js
var config = require('./config');
//conex db
mongoose.connect(config.database, { 
    useNewUrlParser: true,  
    useUnifiedTopology: true, 
    useCreateIndex: true, 
});


//Controladores

const Workers = require('./controladores/workers');


//coors
app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    res.setHeader('Content-Type', 'application/json')
    if ('OPTIONS' == req.method) return res.status(200).send();
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

app.use(router);

app.get('/', function (req, res) {
    res.status(200);
});

app.get('/trab', function (req, res){ 
    Workers.getWorkers()
        .exec((err, metrics) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            }
            res.status(200).json({
                qui

            })


    

            // Workers.getWorkers({}, function(err, worker) {
            //     assert.equal(err, null);
            //     res.json(worker);
            // });
            
}).catch((err) => {
    res.json(err);
  });


});



const middleware = express.Router();




///listar todos los trabajadores
middleware.route('/trabajadores').get(Workers.getWorkers);
/// busc un trabajador
middleware.route('/trabajadores/:id').get(Workers.getWorker);
///eliminar un trabajador
middleware.route('/trabajadores/:id').delete(Workers.deleteWorker);
//añade un trabajador
middleware.route('/trabajadores').post(Workers.addWorker);
//modifica un trabajador
middleware.route('/trabajadores/:id').put(Workers.putWorker);





//start-stop server
app.listen  (3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});