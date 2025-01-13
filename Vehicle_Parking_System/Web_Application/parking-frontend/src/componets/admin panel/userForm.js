import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react'; 

const UserForm = ({ bookParking, updateParking, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [vehicle_no, setVehicleNo] = useState('');
    const [vehicle_type, setVehicleType] = useState('');
    const [name, setName] = useState('');
    const [time_duration, setTimeDuration] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setVehicleNo('');
            setVehicleType('');
            setName('');
            setTimeDuration(0);
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setVehicleNo(data.vehicle_no);
            setVehicleType(data.vehicle_type);
            setName(data.name);
            setTimeDuration(data.time_duration);
        }
    }, [data]);

    const handleSubmit = () => {
        const data = {
            id,
            vehicle_no,
            vehicle_type,
            name,
            time_duration,
        };
        if (isEdit) {
            updateParking(data);
        } else {
            bookParking(data);
        }
    };

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#ffffff', marginBottom: '30px', display: 'block' }}>
            <Grid item xs={12}>
                <Typography
                    component="h1"
                    sx={{ color: '#ff5733' }}
                    fontSize={100}
                    fontWeight={'bold'}
                    display={'flex'}
                    marginLeft={'50px'}
                >
                    User Form
                </Typography>
            </Grid>

            {/* ID Input */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component="label"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                        fontWeight: 'bold',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    ID
                </Typography>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            </Grid>

            {/* Vehicle Number Input */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component="label" sx={{ ...labelStyle }}>
                    Vehicle No
                </Typography>
                <input type="text" value={vehicle_no} onChange={(e) => setVehicleNo(e.target.value)} />
            </Grid>
            {/* Vehicle type Input */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component="label" sx={{ ...labelStyle }}>
                    Vehicle Type
                </Typography>
                <input type="text" value={vehicle_type} onChange={(e) => setVehicleType(e.target.value)} />
            </Grid>

            {/* Name Input */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component="label" sx={{ ...labelStyle }}>
                    Name
                </Typography>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>

            {/* Time Duration Input */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component="label" sx={{ ...labelStyle }}>
                    Time Duration
                </Typography>
                <input type="number" value={time_duration} onChange={(e) => setTimeDuration(e.target.value)} />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
                <button
                    style={{
                        marginLeft: '175px',
                        backgroundColor: '#006eff',
                        color: '#fff',
                        padding: '10px 20px',
                        cursor: 'pointer',
                    }}
                    onClick={handleSubmit}
                >
                    {isEdit ? 'Update' : 'Add'}
                </button>
            </Grid>
        </Grid>
    );
};

export default UserForm;

const labelStyle = {
    color: '#000000',
    marginRight: '20px',
    fontSize: '16px',
    width: '100px',
    display: 'block',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
};
