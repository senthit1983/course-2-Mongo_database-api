var expect = require('expect');
var request = require('supertest')

var {app} = require('./../server')
var {samp} = require('./../models/sample')

beforeEach((done)=>{
    samp.remove().then(()=>done())
})
describe('POST/samp',()=>{
    it('should create new samplle', (done)=>{
    //  var text: 'use sample test'
    
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
            expect(samp.length).toBe(1);
            expect(samp[0].text).toBe(text);
            done()

        }).catch((e)=> done(e))
    })

    })
})