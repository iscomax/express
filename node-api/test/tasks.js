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


/*test the /get route */
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

    describe('/POST task', ()=>{
        it('it should Post an user ', (done)=>{
            let newTask = new Task ({
                title: "materia",
                description: "matematicas"
            });

        chai.request('http://localhost:3000')
        .post('/tasks')
        .send(newTask)
        .end((err, res)=>{
            res.should.have.status(201);
            res.body.should.be.a('object');
            done();
           
             });
        });
    });

    describe('/GET/:id task', ()=>{
        it('it should get a task by the given id', (done)=>{
            let newTask = new Task({
                title:"materia",
                description:"matematicas"

            });
            newTask.save((err, task)=>{
                chai.request('http://localhost:3000')
                .get('/tasks/' + newTask._id)
                .send(newTask)
                .end((err, res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
            });
        });
    });
    




    
});