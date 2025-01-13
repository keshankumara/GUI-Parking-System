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
    const user = new User({
        id: req.body.id,
        vehicle_no:req.body.vehicle_no,
        vehicle_type: req.body.vehicle_type,
        name: req.body.name,
        time_duration: req.body.time_duration

    });
    user.save()
        .then(response => {
            res.json({response});
        })
        .catch(error => {
            res.json({message:error});
        })
};

// user edit

const updateParking = (req, res, next) => {
    const { id, vehicle_no, vehicle_type, name, time_duration } = req.body;

    User.updateOne(
        { id: id }, // Filter: Find the document by `id`
        { 
            vehicle_no: vehicle_no,
            vehicle_type: vehicle_type,
            name: name,
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
    const id = req.body.id;
    User.deleteOne({id:id})
        .then(response =>{
            res.json({response});
        })
        .catch(error =>{
            res.json({message:error});
        })
};

exports.bookParking = bookParking;
exports.parking = parking;
exports.updateParking = updateParking;
exports.deleteParking = deleteParking;
//exports.getUserById = getUserById;
