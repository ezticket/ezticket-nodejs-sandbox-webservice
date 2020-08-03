const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

const sells = [{ ticketId: 'WRGSFVSFVCD', buyerId: 'SDTHETHBDFB', scanLimit: 10 },
    { ticketId: 'SFGSFBXFBSFB', buyerId: 'SFGSFGSGFGNJF', scanLimit: 15 }];

chai.use(chaiHttp);

describe('POST sell', () => {
    it('Save a sell successfully', (done) => {
        chai.request(url)
            .post('/sell')
            .send(sells)
            .end(function (err, res) {
                // console.log(res.body);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Parameter is not an array', (done) => {
        chai.request(url)
            .post('/sell')
            .send({ name: 'Drink', createdAt: '01-01-2020' })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                done();
            });
    });
});
