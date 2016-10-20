const server = require('../server');
const expect = require('expect');
const request = require('supertest');

describe('GET /', () => {
    it('should return a response', (done) => {
        request(server)
            .get('/')
            .expect(200, done);
    });
});