'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  Customer.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Must be valid email format"
        },
        notEmpty: {
          msg: "Email must be filled"
        },
        notNull: {
          msg: "Email is null"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password must be filled"
        },
        notNull: {
          msg: "Password is null"
        },
        len: {
          args: [5],
          msg: "Minimum 5 characters required in password"
        }
      }
    },
    username: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  Customer.addHook('beforeCreate', (customer, options) => {
    customer.password = bcrypt.encrypt(customer.password);

  });
  return Customer;
};