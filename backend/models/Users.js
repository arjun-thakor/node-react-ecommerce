'use strict';

const { DataTypes } = require("sequelize/types");

module.exports= (squelize, Datatypes => {
    return sequelize.define('user',{
        id:{
            type: Datatypes.UUID,
            primaryKey: true
        },
        first_name:{
            type: Datatypes.STRING,
            isAlphanumeric: true,
            require: true,
            allowNull:true
        },
        last_name:{
            type: Datatypes.STRING,
            require: true,
            allowNull:true
        },
        username:{
            type: Datatypes.STRING,
            require: true,
            len:[8, 20],
            allowNull:true
        },
        password:{
            type: Datatypes.STRING,
            require: true,
            len:[8, 20],
            allowNull:true
        },
        email:{
            type: Datatypes.STRING,
            require: true,
            allowNull:true,
            isEmail: true,
            len:[7, 100]
        }
    },
    {
        underscored:true,
        paranoid:true
    })
})