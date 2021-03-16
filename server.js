const express = require("express");
const faker = require("faker")
const app = express();
// se llama con el localhost:8000
const port = 8000;

const User = {
    id: faker.random.number(),
    Username: faker.name.firstName(),
    UserLastname: faker.name.lastName(),
    UserPhone: faker.phone.phoneNumber(),
    UserEmail: faker.internet.email(),
    UserPassword: faker.internet.password(),
};

const Company = {        
    id: faker.random.number(),
    CompanyName: faker.company.companyName(),
    address: {
        CompanyStreet: faker.address.streetName(),
        CompanyCity: faker.address.city(),
        CompanyState: faker.address.state(),
        CompanyCP: faker.address.countryCode(),
        CompanyCountry: faker.address.country(),
    }
    
};

app.get('/api/users/new', (req,res)=>{
    res.send(User);
});


app.get('/api/companies/new', (req,res)=>{
    res.send(Company);
});

app.get('/api/users/companies', (req,res)=>{
    res.send({User, Company});
});




const server = app.listen(port, function() {
    console.log('Escuchando en el puerto ' + port);
  });
  