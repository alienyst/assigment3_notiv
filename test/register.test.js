const request = require('supertest');
const app = require('../app')
const { Customer } = require('../models')

let customerData = {
    email: "siapa@gmail.com",
    password: "bebas"
}

afterAll((done) => {
    if (process.env.NODE_ENV == 'test') {
        Customer.destroy({
            truncate: true,
            cascade: true
        })
            .then(() => {
                done()
            })
            .catch(err => {
                done(err)
            })

    }
})

describe('POST /customer/register', () => {
    it('Customer Register successfully', (done) => {
        request(app)
            .post('/customer/register')
            .send({
                email: customerData.email,
                password: customerData.password
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

describe('Register Error', () => {
    it('Password Kosong', (done) => {
        request(app)
            .post('/customer/register')
            .send({
                email: customerData.email,
                password: null
            })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('Email Kosong', (done) => {
        request(app)
            .post('/customer/register')
            .send({
                email: null,
                password: customerData.password
            })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('Invalid Email', (done) => {
        request(app)
            .post('/customer/register')
            .send({
                email: 'invalidemail',
                password: customerData.password
            })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
});