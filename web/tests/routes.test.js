const app = require('../app');
const expect = require('expect');
const request = require('supertest');

const routes = [
    '/',
    '/boards',
    '/lessons',
    '/partnerships',
    '/about',
    '/under-construction'
];

describe('Routing', () => {
    routes.forEach((route) => {
        describe('GET /', () => {
            it('should return a response', (done) => {
                request(app)
                    .get(route)
                    .expect(200, done);
            });
        });
    });
});
