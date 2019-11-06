const concert = require('./controladores/concert');
const config=require('./config')
const workers = require('./controladores/workers');
const Workers = require('./modelos/workers');
const   Col =require('./modelos/col');
const axios = require('axios');
const Jefes = require('./modelos/jefes');




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



run().catch(error => console.log(error.stack));

async function run() {
  await mongoose.connect('mongodb://localhost:27017/erme', { useNewUrlParser: true   });
  await Workers.find({}).

  exec(function(err,docs){
    if(err){
        console.log("Estamos en el caso de un error el query de mongo");
    }

    for (el in docs){
    const email=docs[el]._doc.email;  
    const _id=docs[el]._id;
    const company =docs[el].company ;
    const ntuser=docs[el].ntuser; 

    // console.log("revisando :"+docs);

if (company==='cdf'){
    let resp =  axios.get(` https://concertconsumer.turner.com/people?email=${email}`, {
        responseType: 'json'
      })
        .then(async function (res) {
          if(res.status==200) {
              datadevuelta=res.data;
              const department=datadevuelta[0].department;
              const PSDepartmentID=datadevuelta[0].PSDepartmentID;
              const Manager_loc=datadevuelta[0].Manager;
              const Manager_id=datadevuelta[0].ManagerID;
              const DomainLogin=datadevuelta[0].DomainLogin;
              const PersonStatus=datadevuelta[0].PersonStatus;
              const ConcertID=datadevuelta[0].ConcertID;
              const JobTitle=datadevuelta[0].JobTitle;
              // const PersonJobID=datadevuelta[0].PersonJobID;

              console.log("ConcertID :"+ConcertID);
              console.log(" company :"+company);


              try {
                const updatedWorker = await Workers.findByIdAndUpdate(
                    _id,
                    { $set: { Manager_ps:datadevuelta[0].Manager,
                        Manager_id:Manager_id,
                        PSDepartmentID:PSDepartmentID,
                        department:department,
                        DomainLogin:DomainLogin,
                        PersonStatus:PersonStatus,
                        ConcertID:ConcertID,
                        JobTitle:JobTitle
                        // PersonJobID:PersonJobID

                    
                    
                    } }
                );
                console.log("El mensaje de update : "+updatedWorker);
            } catch (e) {
                return e;
            }

          }
          else{
              console.log("Softpeople no respondio");
          }
  
        })
        .catch(function (error) {

            console.log("Aquí se captura el error :"+error);
            console.log(`El error proviene de evualar el ${email} `);
          });
}



if (company==='cnn' || company==='chilevision'){

    console.log("evaluando con ntuser :"+ntuser);
    let resp =  axios.get(` https://concertconsumer.turner.com/people?ntlogin=${ntuser}`, {
        responseType: 'json'
      })
        .then(async function (res) {
          if(res.status==200) {
              datadevuelta=res.data;
              const department=datadevuelta[0].department;
              const PSDepartmentID=datadevuelta[0].PSDepartmentID;
              const Manager_loc=datadevuelta[0].Manager;
              const Manager_id=datadevuelta[0].ManagerID;
              const DomainLogin=datadevuelta[0].DomainLogin;
              const PersonStatus=datadevuelta[0].PersonStatus;
              const ConcertID=datadevuelta[0].ConcertID;
              const JobTitle=datadevuelta[0].JobTitle;
              // const PersonJobID=datadevuelta[0].PersonJobID;

              

              console.log("ConcertID :"+ConcertID);
              console.log(" company :"+company);

              try {
                const updatedWorker = await Workers.findByIdAndUpdate(
                    _id,
                    { $set: { Manager_ps:datadevuelta[0].Manager,
                        Manager_id:Manager_id,
                        PSDepartmentID:PSDepartmentID,
                        department:department,
                        DomainLogin:DomainLogin,
                        PersonStatus:PersonStatus,
                        ConcertID:ConcertID,
                        JobTitle:JobTitle
                        // PersonJobID:PersonJobID

                    
                    
                    } }
                );
                console.log("El mensaje de update : "+updatedWorker);
            } catch (e) {
                return e;
            }
    
          }
          else{
              console.log("Softpeople no respondio");
          }

          console.log('el res :'+res[0].department);  
        })
        .catch(function (error) {
            console.log("Aquí se captura el error :"+error);
            console.log(`El error proviene de evualar el ${ntuser} `);
          });

}

  
    }


  })


  
}


