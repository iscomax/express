process.env.NODE_ENV = 'test';

let Task = require('../models/task')

//requrie the dev-dependencies
let chai = require ('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();



//our parent block

describe('tasks',()=>{
    beforeEach((done)=>{
        Task.remove({},(err)=>{
            done();
        });
    });


/*test the */
describe('/GET tasks', ()=>{
    it('it should get all the tasks',(done)=>{
        chai.request('http://localhost:3000')
        .get('/tasks')
        .end((err, res)=>{
            res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();

            });
        });
    });






    
});