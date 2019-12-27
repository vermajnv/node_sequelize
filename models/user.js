'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : {
                msg : 'Fist Name cannot be null'
            }
        }
    },
    last_name: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notNull : {
                msg : 'Last Name cannot be null',
            }
        }
    },
    username: {
        type : DataTypes.STRING,
        allowNull : true,
        unique : {
            args : true,
            msg : 'User name is already in use.'
        },
    },
    email: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            isEmail : {
                args : true,
                msg : 'Should be email type',
            },
        },
        unique : {
            args : true,
            msg : 'Email is already registered.',
        },
    },
    password: {
        type : DataTypes.STRING,
        allowNull : false,
        validate : 
        {
            notEmpty : true,
            len : {
                args : [6-14],
                msg : 'Password should be of 6-14 char.',
            },
        }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
