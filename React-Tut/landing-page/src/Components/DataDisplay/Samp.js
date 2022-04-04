import * as React from 'react';
import {DataGrid} from "@mui/x-data-grid";
import axios from "axios";





function DataTable() {
    // const rows = [{id:1,name : "Vishnu Singh", phone : "8989284312",email:"123@gmail.com"},
    //     {id:2,name : "Vishnu Singh Rajawat", phone : "8989284312",email:"123@gmail.com"},
    //     {id:3,name : "Vishnu", phone : "8989284312",email:"123@gmail.com"}];

    const columns = [
        {field:"id",headerName:"ID" },
        {field:"fName",headerName:"First Name"},
        {field:"lName",headerName:"First Name"},
        {field:"phone",headerName:"Phone"},
    ];
    const [rows, setRows] = React.useState(10);
    const [pageSize, setPageSize] = React.useState(10);
    React.useEffect(()=>{
        axios
            .get("http://localhost:8080/GSON_DEMO/Fetch")
            .then(response => {
                console.log(response.data);
                setRows(response.data);
            })
    },[]);
    return (
        <div style={{height:400,width:"100%"}}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection pageSize={pageSize}
                pagination
                rowsPerPageOptions={[10,20,100]}
                onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
            />
        </div>
    );
}

export default DataTable;
