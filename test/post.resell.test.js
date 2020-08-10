const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

const sells = [{ ticketId: 'DTHDGNBVBDGG', buyerId: 'SDTHETHBDFB', scanLimit: 10 },
    { ticketId: 'THEDBDFBVBV', buyerId: 'SFHBSGBSFBXDVB', scanLimit: 15 }];

chai.use(chaiHttp);
requester = chai.request.agent(url);

describe('POST resell', () => {
    it('Save a resell successfully', (done) => {
        requester
            .post('/resell')
            .send(sells)
            .end(function (err, res) {
                // console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Parameter is not an array', (done) => {
        requester
            .post('/resell')
            .send({ name: 'Drink', createdAt: '01-01-2020' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
});
