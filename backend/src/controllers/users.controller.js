const UserModel = require('../models/users.model');
const express = require('express');
const router = express.Router();


class UsersController {
    async store(req, res){
        try{
            const newUser = await UserModel.create(req.body);
            
            return res.json(newUser);
        }catch(err)
        {
            return res.status(400).send('Error in created user');
        }
    }

    async index(req, res){
        try {
            const getUsers = await UserModel.find({});

            return res.json(getUsers);
        }catch(err)
        {
            return res.status(404).send('Error to show all users');
        }
    }
}

module.exports = new UsersController();