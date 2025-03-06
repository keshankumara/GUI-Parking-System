import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./userTable.css";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <TableContainer component={Paper} className="table-container">
            <Table className="users-table">
                <TableHead>
                    <TableRow className="table-header-row">
                        
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Vehicle Type</TableCell>
                        <TableCell>Vehicle No</TableCell>
                        <TableCell>Time Duration</TableCell>
                        <TableCell>Action for Update</TableCell>
                        <TableCell>Action for Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row) => (
                            <TableRow key={row._id} className="table-body-row">
                                
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.password}</TableCell>
                                <TableCell>{row.vehicle_type}</TableCell>
                                <TableCell>{row.vehicle_no}</TableCell>
                                <TableCell>{row.time_duration}</TableCell>
                                <TableCell>
                                    <button
                                        className="update-button"
                                        onClick={() =>
                                            selectedUser({
                                                _id: row._id,
                                                vehicle_no: row.vehicle_no,
                                                vehicle_type: row.vehicle_type,
                                                name: row.name,
                                                email: row.email,
                                                password: row.password,
                                                time_duration: row.time_duration,
                                            })
                                        }
                                    >
                                        Update
                                    </button>
                                </TableCell>
                                <TableCell>
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteUser({ _id: row._id })}
                                    >
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={9} className="no-data-cell">
                                No Data
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
