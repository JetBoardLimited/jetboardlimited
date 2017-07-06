const app = require('../app');
const expect = require('expect');
const request = require('supertest');

describe('GET /', () => {
    it('should return a response', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });
});
