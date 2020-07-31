const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

chai.use(chaiHttp);

describe('Funcionalidad Scan: ', () => {
    it('grabar un scan', (done) => {
        chai.request(url)
            .post('/eqr4t34sfdsfsgf/scan')
            .send({ id: 2, name: 'Drink', createdAt: '01-01-2020' })
            .end(function (err, res) {
                console.log(res.body);
                expect(res).to.have.status(200);
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
