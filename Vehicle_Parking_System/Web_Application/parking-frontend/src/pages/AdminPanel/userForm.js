import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import './userForm.css';

const UserForm = ({ bookParking, updateParking, submitted, data, isEdit }) => {
    const [vehicle_no, setVehicleNo] = useState('');
    const [vehicle_type, setVehicleType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [time_duration, setTimeDuration] = useState('');

    useEffect(() => {
        if (!submitted && !isEdit) {
            setVehicleNo('');
            setVehicleType('');
            setName('');
            setEmail('');
            setPassword('');
            setTimeDuration(0);
        }
    }, [submitted, isEdit]);

    useEffect(() => {
        if (data?._id && data._id !== 0) {
            setVehicleNo(data.vehicle_no);
            setVehicleType(data.vehicle_type);
            setName(data.name);
            setEmail(data.email);
            setPassword(data.password);
            setTimeDuration(data.time_duration);
        }
    }, [data]);

    const handleSubmit = () => {
        const formData = {
            name,
            email,
            password,
            vehicle_no,
            vehicle_type,
            time_duration,
        };
        if (isEdit) {
            updateParking(formData);
        } else {
            bookParking(formData);
        }
    };

    return (
        <Grid container spacing={2} className="form-container">
            <Grid item xs={12} sm={6} className="form-row">
                <label htmlFor="vehicle_no">Vehicle No</label>
                <input type="text" id="vehicle_no" value={vehicle_no} onChange={(e) => setVehicleNo(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6} className="form-row">
                <label htmlFor="vehicle_type">Vehicle Type</label>
                <input type="text" id="vehicle_type" value={vehicle_type} onChange={(e) => setVehicleType(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6} className="form-row">
                <label htmlFor="name">Username</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6} className="form-row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6} className="form-row">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Grid>

            <Grid item xs={12} sm={6} className="form-row">
                <label htmlFor="time_duration">Time Duration</label>
                <input type="number" id="time_duration" value={time_duration} onChange={(e) => setTimeDuration(e.target.value)} />
            </Grid>

            <Grid item xs={12}>
                <button className="submit-button" onClick={handleSubmit}>
                    {isEdit ? 'Update' : 'Update'}
                </button>
            </Grid>
        </Grid>
    );
};

export default UserForm;
