const User = require('../Model/User'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json( 'All fields are required' );
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(200).json( newUser );
    } catch (error) {
        res.status(500).json( error);
    }
};


exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json('fill all fields');
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json('user not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json( 'Invalid email or password' );
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn:'1day'});

        res.status(200).json({token});
    } catch (error) {
        res.status(500).json(error);
    }
};
