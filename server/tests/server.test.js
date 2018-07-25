var expect = require('expect');
var request = require('supertest')

var {app} = require('./../server')
var {sampleobj} = require('./../models/sample')

beforeEach((done)=>{
    sampleobj.remove({}).then(()=>done())
});
describe('POST /samp',()=>{
    it('should create new sample', (done)=>{
         var text = 'this is from postman';
    
    request(app)
        .post('/samp') 
        .send(text)
        .expect(200)
        .expect((res)=>{
            expect(res.body.text),toBe(text);
        })
        .end((err, res)=>{
            if(err)
            return done(err);

        samp.find().then((sample)=>{
            expect(sampleobj.length).toBe(1);
            expect(sampleobj[0].text).toBe(text);
            done()

        }).catch((e)=> done(e))
    })

    })
})