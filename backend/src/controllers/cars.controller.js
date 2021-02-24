const CarsModel = require('../models/cars.model');
const UsersModel = require('../models/users.model')
const RentModel = require('../models/rent.model')
const express = require('express');
const router = express.Router();


class CarsController {

    async store(req, res){
        try{
            const newCar = await CarsModel.create(req.body);

            return res.json(newCar)
        }catch(err){
            return res.status(401).send('Error to insert new car');
        }
    }

    async rent(req, res){
    
        const findCar = await CarsModel.findById(req.params.id);
        const findUser = await UsersModel.findById(req.body.userId);
        const findRent = await RentModel.find({ users: req.body.userId, car: req.params.id });
        
        if (!findCar && !findUser)
        {
            return res.status(404).send('Car or User not found');
        }

        if (!findRent)
        {
            const rentCar = await rentModel.create({ users: req.body.userId, car: req.params.id });
            
            return res.json(rentCar);
        }

        return res.status(403).send('Car has be rented');
        
    }

    async index(req, res){
        try{
            const getCars = await CarsModel.find();

            return res.json(getCars)
        }catch(err){
            return res.status(404).send('Error to search all cars');
        }
    }


    async updateCar(req, res)
    {
        try {
            const findCar = await CarsModel.findById(req.params.id);

            if (!findCar)
            {
                return res.status(404).send('Car not found');
            }

            const updateCar = await CarsModel.findByIdAndUpdate(req.params.id, req.body);

            return res.json(updateCar)


        } catch (err) {
            return res.status(403).send('Error to update car');
        }
    }
}


module.exports = new CarsController();