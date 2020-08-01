const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

chai.use(chaiHttp);

describe('Operation scan: ', () => {
    it('Save a scan successfully', (done) => {
        chai.request(url)
            .post('/eqr4t34sfdsfsgf/scan')
            .send({ id: 2, name: 'Drink', createdAt: '01-01-2020' })
            .end(function (err, res) {
                // console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Parameters are missing: id', (done) => {
        chai.request(url)
            .post('/eqr4t34sfdsfsgf/scan')
            .send({ name: 'Drink', createdAt: '01-01-2020' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
    it('Parameters are missing: name', (done) => {
        chai.request(url)
            .post('/eqr4t34sfdsfsgf/scan')
            .send({ id: 2, createdAt: '01-01-2020' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
    it('Parameters are missing: createdAt', (done) => {
        chai.request(url)
            .post('/eqr4t34sfdsfsgf/scan')
            .send({ id: 2, name: 'Drink' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
});
