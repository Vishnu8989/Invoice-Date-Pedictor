import {useEffect, useState} from "react";
import {getData} from "../Services/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MyGrid(){
    const[data,setData] = useState([]);
    useEffect(async ()=>{
        setData(await getData())
    },[])
    return<>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Customer Id</TableCell>
                            <TableCell align="right">Customer Number</TableCell>
                            <TableCell align="right">Total Open Amount</TableCell>
                            {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((customers) => (
                            <TableRow
                                key={customers.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {customers.id}
                                </TableCell>
                                <TableCell align="right">{customers.cust_number}</TableCell>
                                <TableCell align="right">{customers.total_open_amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </>
}
export default MyGrid;