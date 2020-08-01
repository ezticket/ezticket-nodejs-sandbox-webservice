const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

chai.use(chaiHttp);

describe('Operation getOwners: ', () => {
    it('Get all the owners of the ticket', (done) => {
        chai.request(url)
            .get('/eqr4t34sfdsfsgf/getOwners')
            .end(function (err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
