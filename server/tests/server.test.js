var expect = require('expect');
var request = require('supertest')

//create an object for models like server and sample

var {app} = require('./../server')
var {samp} = require('./../models/sample')

beforeEach((done)=>{
    samp.remove({}).then(()=>done())
});
describe('POST /samples',()=>{
    it('should create new sample', (done)=>{
         var text = 'this is from postman';
    
    request(app)
        .post('/samples') 
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err, res)=>{
            if(err)
            return done(res);

        samp.find().then((samples)=>{
            expect(samples.length).toBe(1);
            expect(samples[0].text).toBe(text);
            done()

        }).catch((e)=> done(e))
    })

    })
})