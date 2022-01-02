process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let userModel = require('../src/models/UserModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();


chai.use(chaiHttp);

/*
    User tests
*/
describe('/register user', () => {
    it('it should not add a user with a missing field', (done) => {
        let user = {
            "firstName": "fred",
            "lastName": "tester"
            //missing email and passwrod
        }
        chai.request(server)
        .post('/api/v1/users/register')
        .send(user)
        .end((err, res) => {
            res.body.should.have.property('status').eql('failure');
            done();
        });
    });
});