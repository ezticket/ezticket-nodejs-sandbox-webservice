const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

chai.use(chaiHttp);
requester = chai.request.agent(url);

describe('POST scans', () => {
    it('Save a scan successfully', (done) => {
        requester
            .post('/eqr4t34sfdsfsgf/scans')
            .send({ id: 2, name: 'Drink', createdAt: '01-01-2020' })
            .end(function (err, res) {
                // console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Parameters are missing: id', (done) => {
        requester
            .post('/eqr4t34sfdsfsgf/scans')
            .send({ name: 'Drink', createdAt: '01-01-2020' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
    it('Parameters are missing: name', (done) => {
        requester
            .post('/eqr4t34sfdsfsgf/scans')
            .send({ id: 2, createdAt: '01-01-2020' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
    it('Parameters are missing: createdAt', (done) => {
        requester
            .post('/eqr4t34sfdsfsgf/scans')
            .send({ id: 2, name: 'Drink' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
});
