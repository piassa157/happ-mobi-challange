const CarsModel = require('../models/cars.model');
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

            if(findCar.rented == null)
            {
                const rentCar = await CarsModel.findByIdAndUpdate(req.params.id, req.body)

                return res.json(rentCar)
            }


            return res.status(403).send('Car has be rented');
        
    }

    async index(req, res){
        try{
            const getCars = await CarsModel.find({});

            return res.json(getCars)
        }catch(err){
            return res.status(404).send('Error to search all cars');
        }
    }
}


module.exports = new CarsController();