const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const url = 'http://localhost:3000/api/v1/tickets';

chai.use(chaiHttp);

describe('Simple Test', () => {
    it('should return 2', () => {
        assert.strictEqual(1 + 1, 2);
    });
    it('should return 9', () => {
        assert.strictEqual(3 * 3, 9);
    });
});
