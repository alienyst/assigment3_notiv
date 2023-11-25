const request = require('supertest');
const app = require('../app');
const { Customer } = require('../models')

let customerData = {
    email: "nana@gmail.com",
    password: "bebas"
}

beforeAll((done) => {
    Customer.create({
        email: customerData.email,
        password: customerData.password
    })
        .then(() => {
            done()
        })
        .catch(err => {
            done(err)
        })
});

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

describe('POST /customer/login', () => {
    it('Login Sukses', (done) => {
        request(app)
            .post('/customer/login')
            .send({
                email: customerData.email,
                password: customerData.password
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    describe('Login Error', () => {
        it('Invalid Password', (done) => {
            request(app)
                .post('/customer/login')
                .send({
                    email: customerData.email,
                    password: 'wrongpassword'
                })
                .expect(401)
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        it('Invalid Email', (done) => {
            request(app)
                .post('/customer/login')
                .send({
                    email: 'invalidemail',
                    password: customerData.password
                })
                .expect(401)
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });
    });
});

