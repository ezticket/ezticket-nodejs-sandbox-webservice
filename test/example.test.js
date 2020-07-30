const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

chai.use(chaiHttp);

describe('Insert in json data: ', () => {
    it('should insert an element', (done) => {
        chai.request(url)
            .post('/')
            .send({ title: 'A new test', content: 'New content', tags: ['t1', 't2'] })
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(201);
                done();
            });
    });
});

describe('Simple Test', () => {
    it('should return 2', () => {
        assert.strictEqual(1 + 1, 2);
    });
    it('should return 9', () => {
        assert.strictEqual(3 * 3, 9);
    });
});
