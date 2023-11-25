const { Customer } = require('../models');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('../helpers/jwt');

class Controller {
    static register(req, res, next) {
        const { email, password } = req.body;

        Customer.create({
            email,
            password
        })
            .then(result => {
                let response = {
                    id: result.id,
                    email: result.email
                }
                res.status(201).send(response)
            })
            .catch(err => {
                next(err)
            })

    }

    static login(req, res, next) {
        const { email, password } = req.body;

        Customer.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (result) {
                    if (bcrypt.comparePass(password, result.password)) {
                        let access_token = jwt.signIn(result.id, result.email, "customer")
                        res.status(200).send({ "access_token": access_token })
                    } else {
                        next({ code: 401, message: 'invalid email / password' })
                    }

                } else {
                    next({ code: 401, message: 'invalid email / password' })
                }
            })
            .catch(err => {

                next(err)
            })
    }
}

module.exports = Controller;