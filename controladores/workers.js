const Workers = require('../modelos/workers.js');
/** 
 * Descripción del método
 * 
 * @name addWorker
 * @param {TipoDato} nombreVar No recibe parametros
 * @return {Objeto} Objeto que fue creado
 * @author Leonardo Boyer
 */
exports.addWorker = function(req, res) {


    const addWorker = (obj) => {
        return new Promise((resolve, reject) => {
            Workers.create(obj, function(err, rol) {
                if (!err) {
                    resolve(rol)
                } else {
                    reject(err)
                }
            })
        })
    }

    const obj = [{
        email: req.body.email,
        firstname1: req.body.firstname1,
        firstname2: req.body.firstname2,
        lastname1: req.body.lastname1,
        lastname2: req.body.lastname2,
        ext:req.body.ext,
        rut: req.body.rut,
        sex: req.body.sex,
        company: req.body.company,
        personal: req.body.personal[0],
        admin: req.body.admin[0]
    }];


    addWorker(obj).then((responseWorker) => {
        return res.status(200).json(responseWorker)
    }).catch(e => {
        console.log(e);
        return res.status(403).json({ message: e.errmsg })
    })
}

/** 
 * Descripción del método
 * 
 * @name getWorkers
 * @param {TipoDato} nombreVar No recibe parametro
 * @return {Array} Arreglo de objetos
 * @author Leonardo Boyer
 */
exports.getWorkers = async(req, res) => {

    console.log("Entra a buscar los trabajadores2");

    // const workers = () => {

    // let mejor = Workers.find({});
    // return new Promise((resolve, reject) => {
    Workers.find(function(err, workers) {
            if (!err) {
                console.log("Antes de resolver");
                console.dir(workers);
                resolve(workers)
            } else {
                console.log("hay un error0 de resolver");
                reject(err)
            }
        })
        // })

    // console.dir(mejor);

    // console.log("variable mejor :" + mejor.schema);
    // }

    // workers().then((workers) => {
    //     return workers;
    // }).catch((err) => {
    //     return res.status(400).json({ message: "err", error: err });
    // })
}




/**  ESTA FUNCIÓN ES LA POC 
 * Descripción del método
 * 
 * @name getWorker
 * @param {TipoDato} nombreVar No recibe parametro
 * @return {Array} Arreglo de objetos
 * @author Leonardo Boyer
 */
exports.getWorker = function(req, res) {


    return new Promise((resolve, reject) => {
        console.log(" El parámetro es : " + req.params.id);

        Workers.findById(req.params.id, function(err, workers) {
            if (!err) {

                resolve(workers)
            } else {
                rejet(err)
            }
        })
    }).catch((err) => {
        return res.status(403).json(err)
    }).then(function(response) {
        return res.status(200).json({ este: response })
    })

    //////**  ESTA FUNCIÓN HAY QUE DEJARLA BAJO OBSERVACIÓN //////////////////
    // return false;


    // Workers.findById(req.params.id, function(err, workers) {
    //     if (!err) {
    //         return res.status(200).json(workers)
    //     } else {
    //         return res.status(403).json(err)
    //     }
    // })
    // return false; 


    // console.log("aqui vive el parámetro",req.params.id);

    // const workerx = () => {
    //     return new Promise((resolve, reject) => {
    //         console.log("Dentro de la promesa de la funcion worker",id);
    //         Workers.findById(req.params.id, function(err, workers) {
    //             if (!err) {
    //                 resolve(workers)
    //             } else {
    //                 reject(err)
    //             }
    //         })
    //     })
    // }

    // workerx().then((response) => {
    //     console.log(response)
    //     return res.status(200).json( response);
    // }).catch(e => {
    //     return res.status(400).json({ message: e.errmsg });
    // })




}

/** 
 * Descripción del método
 * 
 * @name deleteWorker
 * @param {id} _id Id del registro que sera eliminado
 * @return {objeto} c
 * @author Leonardo Boyer
 */
exports.deleteWorker = function(req, res) {

    return new Promise((resolve, reject) => {

        Workers.findByIdAndUpdate(req.params.id, { $set: { estado: 'inactivo' } }, function(err, workers) {
            if (!err) {
                resolve(workers)
            } else {
                resolve(err)
            }
        })
    }).catch((err) => {
        return res.status(403).json(err)
    }).then(function(response) {

        return res.status(200).json({ otromark: response })
    })
}

/** 
 * Descripción del método
 * 
 * @name putWorker
 * @param {ObjectId} _id Id del registo que sera actualizado
 * @return {Objecto} Objeto de la coleccion que fue actualizada
 * @author Leonardo Boyer
 */
exports.putWorker = function(req, res) {

    console.log(" Estoy en el putWorker")


    // Roles.findByIdAndUpdate(req.body._id,req.body ,function (err, response) {

    console.log(req.params.id);

    const obj = [{
        email: req.body.email,
        firstname1: req.body.firstname1,
        firstname2: req.body.firstname2,
        lastname1: req.body.lastname1,
        lastname2: req.body.lastname2,
        rut: req.body.rut,
        sex: req.body.sex,
        company: req.body.company,
        personal: req.body.personal,
        admin: req.body.admin[0]
    }];





    return new Promise((resolve, reject) => {

        Workers.findByIdAndUpdate(req.params.id, obj[0], { new: true }, function(err, workers) {
            if (!err) {
                resolve(workers)
            } else {
                resolve(err)
            }
        })
    }).catch((err) => {
        return res.status(403).json(err)
    }).then(function(response) {

        return res.status(200).json({ este: response })
    })



}