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

    async login(req, res) {
        try {
            const findUser = await UserModel.find({cpf: req.body.cpf, password: req.body.password});

            if (!findUser)
            {
                return res.status(401).send('Login failed');
            }

            return res.json(findUser);
        } catch (err)
        {
            return res.status(404).send('Error to login in application');
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

    async updateUser(req, res) {
        try {
            const findUser = await UserModel.findById(req.params.id);

            if (!findUser)
            {
                return res.status(401).send('Error user not found');
            }

            const updateUser = await UserMoDEL.findByIdAndUpdate(req.params.id, req.body);

            return res.json(updateUser);

        } catch (err)
        {
            return res.status(404).send('Error to update user')
        }
    }
}

module.exports = new UsersController();