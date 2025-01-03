const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.services');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    // Check if captain already exists
    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: "Captain already exists" });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create the captain
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    // Generate token
    const token = captain.generateAuthToken(); // Ensure this method exists and works correctly

    // Respond with the captain and token
    res.status(201).json({ captain, token });
};
