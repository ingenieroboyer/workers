const concert = require('./controladores/concert');
const config=require('./config')
const workers = require('./controladores/workers');
const Workers = require('./modelos/workers');
const   Col =require('./modelos/col');
const axios = require('axios');



const mongoose = require('mongoose');


let getUnidades = async() => {

    try {
        let temp = await concert.getUnidades();

        return temp
    } catch (e) {
        return `No se pudo determina`;
    }
}

let getTrab = async(ntuser) => {

    try {
        let temp = await concert.getTrab(ntuser);


        return temp
    } catch (e) {
        return `No se pudo determina`;
    }
}

let getJefe = async(ntuser) => {

    try {
        let temp = await concert.getJefe(ntuser);
        jefe = temp.data
        console.log("En jefe: " + jefe[0].Manager);


        return jefe
    } catch (e) {
        return `No se pudo determina`;
    }
}


// let guardaJefe = async () => {



    // Workers.find(function(err, workers) {
    //     if (!err) {
    //         console.log("Antes de resolver");
    //         console.dir(workers);
    //         resolve(workers)
    //     } else {
    //         console.log("hay un error0 de resolver");
    //         reject(err)
    //     }
    // })


    // Col.find({rut:"70228068"}, function(err, data) {
    //     if(err){
    //         console.dir(err)
    //         console.log("Caso de error :"+err)
    //         return
    //     }
    //     if(data.length == 0) {
    //         console.log("No record found")
    //         return
    //     }
    //     console.log(data[0].name);
        
    //   });


    // try {
    //     console.log("Entra a buscar las colu");

    //     let colu =  Col.find({rut:'70228068'});
    //     console.dir(colu)

    //     console.log("Los colu :" + colu.data);

    //     // let temp = await concert.getJefe(ntuser);
    //     // jefe = temp.data
    //     // console.log("En jefe: " + jefe[0].Manager);


    //     return trab
    // } catch (e) {
    //     return `No se pudo determinar ${e}`;
    // }


// }
// guardaJefe();


run().catch(error => console.log(error.stack));

async function run() {
  await mongoose.connect('mongodb://localhost:27017/erme', { useNewUrlParser: true   });
  
  await Workers.find({}).
  where('company').equals('cdf').
  exec(function(err,docs){



    // console.log("espacio espacio");
    const email=docs[0]._doc.email;
    const _id=docs[0]._id;

    // console.log('el emael :'+email);

    let resp =  axios.get(` https://concertconsumer.turner.com/people?email=${email}`, {
        responseType: 'json'
      })
        .then(function(res) {
          if(res.status==200) {
              datadevuelta=res.data;

              const department=datadevuelta[0].department;
              const PSDepartmentID=datadevuelta[0].PSDepartmentID;
              const Manager_loc=datadevuelta[0].Manager;
              const Manager_id=datadevuelta[0].ManagerID;


            console.log("correo: "+email);
            console.log("_id: "+_id);
            console.log("department :"+department);
            console.log("La PSDepartmentID :"+PSDepartmentID);
            console.log("Manager_loc :"+Manager_loc);
            console.log("Manager_id:"+Manager_id);


            Workers.findByIdAndUpdate(_id, function (err, doc) {
                if (err) {
                    console.log('No pudo actualizar');
                }
                doc.name = 'jason bourne';
                doc.save(callback);
              });

            // var departamento =datadevuelta[0].department;
            // var departamento =datadevuelta[0].department;

            // console.dir(datadevuelta[0]);
          }
        //   console.log('el res :'+res[0].department);  
        });
   







  })
  
  
//   const docs = await Workers.find({});
//   console.dir(docs);







  
}
