const User = require('./model');


// get user
const parking = (req, res, next) => {
    User.find()
        .then(response =>{
            res.json({response});
        })
        .catch(error =>{
            res.json({message:error});
        })
};

// add user
const bookParking = (req, res, next) => {
    console.log("Received Data:", req.body); // Log request body to debug

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ success: false, message: "Request body is empty" });
    }

    const { email, vehicle_no, vehicle_type, time_duration } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: "Email is required" });
    }

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            User.updateOne(
                { _id: user._id }, 
                { vehicle_no, vehicle_type, time_duration }
            )
            .then(response => {
                if (response.matchedCount > 0) {
                    res.json({ success: true, message: "Update successful", response });
                } else {
                    res.json({ success: false, message: "No document found" });
                }
            })
            .catch(error => res.status(500).json({ success: false, message: "Error updating data", error }));
        })
        .catch(error => res.status(500).json({ success: false, message: "Error finding user", error }));
};





const register = (req, res, next) => {
    const { name, email, password } = req.body;

    // Check if the email already exists
    User.findOne({ email })
        .then(existingUser => {
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'Email already in use.'
                });
            }

            // Create new user if the email is not already taken
            const user = new User({
                name,
                email,
                password
            });

            user.save()
                .then(response => {
                    res.status(201).json({
                        success: true,
                        message: 'Registration successful!',
                        user: {
                            id: response._id,
                            name: response.name,
                            email: response.email
                        }
                    });
                })
                .catch(error => {
                    console.error('Error during registration:', error);
                    res.status(500).json({
                        success: false,
                        message: 'Registration failed. Please try again.'
                    });
                });
        })
        .catch(error => {
            console.error('Error while checking email existence:', error);
            res.status(500).json({
                success: false,
                message: 'An error occurred while processing the request. Please try again later.'
            });
        });
};


// login

const login = (req, res) => {
    const { email, password } = req.body;

    // Assuming `User` is your database model
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                // User not found
                return res.status(404).json({ message: "User not found" });
            }

            if (user.password === password) {
                // Password matches
                res.json({ success: true, message: "Login successful", user });
            } else {
                // Password does not match
                res.status(401).json({ success: false, message: "Invalid password" });
            }
        })
        .catch(error => {
            // Handle database errors
            res.status(500).json({ message: "Error checking login", error });
        });
};


// user edit

const updateParking = (req, res, next) => {
    const {name,email, password, vehicle_no, vehicle_type, time_duration } = req.body;

    User.updateOne(
        { email: email }, // Filter: Find the document by `email`
        { 
            vehicle_no: vehicle_no,
            vehicle_type: vehicle_type,
            name: name,
            email: email,
            password: password,
            time_duration: time_duration 
        } // Update: Set new values
    )
        .then(response => {
            if (response.matchedCount > 0) { // Check if any document was matched
                res.json({ message: "Update successful", response });
            } else {
                res.json({ message: "No document found with the given ID" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Error updating data", error });
        });
};


// user delete

const deleteParking = (req, res,next) => {
    const id = req.body._id;
    User.deleteOne({_id:id})
        .then(response =>{
            res.json({response});
        })
        .catch(error =>{
            res.json({message:error});
        })
};

exports.bookParking = bookParking;
exports.parking = parking;
exports.login = login;
exports.updateParking = updateParking;
exports.deleteParking = deleteParking;
exports.register = register;
//exports.getUserById = getUserById;
