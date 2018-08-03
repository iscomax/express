process.env.NODE_ENV = 'test';

let User = require('../models/user');

//requrie the dev-dependencies
let chai = require ('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

//our parent block

describe('use',()=>{
    beforeEach((done)=>{//before each test we empty  the database
        User.remove({},(err)=>{
            done();
        });
    });

    /*test the /get route*/
    describe('/GET users',()=>{
        it('it should get all the users ', (done)=>{
            chai.request('http://localhost:3000')
            .get('/users')
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });

    describe('/POST user', ()=>{
        it('it should Post an user ', (done)=>{
            let newUser = new User({
               username: "juan",
               first_name: "ortiz",
               last_name:"perez" 
            });
        chai.request('http://localhost:3000')
        .post('/users')
        .send(newUser)
        .end((err, res)=>{
            res.should.have.status(201);
            res.body.should.be.a('object');
            done();
             });
        });
    });

    describe('/GET/:id user', ()=>{
        it('it should get a user by the given id', (done)=>{
            let newUser = new User({
                username: "juan",
               first_name: "ortiz",
               last_name:"perez" 
            });
            newUser.save((err, user)=>{
                chai.request('http://localhost:3000')
                .get('/users/' + newUser._id)
                .send(newUser)
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
            });
        });
    });







   


});

