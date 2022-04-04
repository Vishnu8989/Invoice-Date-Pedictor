import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import axios from "axios";
import './index.css'



const DataToDisplay = ()=>{

    const columns = [
        {field:"id",headerName:"SL NO" },
        {field:"business_code",headerName:"Business Code" },
        {field:"cust_number",headerName:"Customer Number" },
        {field:"clear_date",headerName:"Clear Date" },
        {field:"buisness_year",headerName:"Business Year" },
        {field:"doc_id",headerName:"Document ID" },
        {field:"posting_date",headerName:"Posting Date" },
        {field:"document_create_date",headerName:"Document Create Date" },
        {field:"due_in_date",headerName:"Due Date" },
        {field:"invoice_currency",headerName:"Invoice Currency" },
        {field:"document_type",headerName:"Document Type" },
        {field:"posting_id",headerName:"Posting ID" },
        {field:"total_open_amount",headerName:"Total Open Amount" },
        {field:"baseline_create_date",headerName:"Baseline Create Date" },
        {field:"cust_payment_terms",headerName:"Payment Term[s]" },
        {field:"invoice_id",headerName:"Invoice ID" }

    ];
    const [rows, setRows] = React.useState(10);
    const [pageSize, setPageSize] = React.useState(10);
    React.useEffect( ()=>{
        axios
            .get("http://localhost:8080/Final/Fetch")
            .then(async response => {
                console.log(response.data);
                await setRows(response.data);
            })
    },[]);
    return (
        <div className='Data_Grid'>
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
export default DataToDisplay