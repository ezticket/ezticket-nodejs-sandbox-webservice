const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

chai.use(chaiHttp);
requester = chai.request.agent(url);

describe('GET owners', () => {
    it('Get all the owners of the ticket', (done) => {
        requester
            .get('/eqr4t34sfdsfsgf/owners')
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
