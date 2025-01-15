import { Box } from "@mui/material";
import UserForm from "./userForm";
import UsersTable from "./userTable";
import Axios from "axios";
import { useEffect, useState } from "react";
//import { flushSync } from "react-dom";

//const API_BASE_URL = 'http://localhost:3001/api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        parking();
    }, []);

    const parking = () => {
        Axios.get('http://localhost:3001/api/parking')
            .then((response) => {
                setUsers(response.data?.response || []);
            })
            .catch((error) => {
                console.log("Axios Error: ", error);
            });
    };


    const bookParking = async (data) => {
        setSubmitted(true);
        Axios.post('http://localhost:3001/api/booking', data)
            .then(() => {
                parking();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch((error) => {
                console.log("Axios Error: ", error);
            });
    };

    const updateParking = async (data) => {
        setSubmitted(true);
        Axios.post('http://localhost:3001/api/booking_update', data)
            .then(() => {
                parking();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch((error) => {
                console.log("Axios Error: ", error);
            });
    };

    const deleteParking = (data) => {
        Axios.post('http://localhost:3001/api/booking_delete', data)
            .then(() => {
                parking();
            })
            .catch((error) => {
                console.log("Axios Error: ", error);
            });
    };

    return (
        <Box sx={{ width: 'calc(100% - 100px)', margin: 'auto', marginTop: '100px' }}>
            <UserForm
                bookParking={bookParking}
                updateParking={updateParking}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable
                rows={users}
                selectedUser={(data) => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={(data) => window.confirm("Are you sure you want to delete this user?") && deleteParking(data)}
            />
        </Box>
    );
};

export default Users;
