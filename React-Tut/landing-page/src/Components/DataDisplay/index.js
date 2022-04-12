import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import './index.css'
import {addCostumer, getData, getTotal} from "../services/Data"
import {useState} from "react";
import AddCustomer from "../AddCust";



const DataToDisplay = ()=>{
    const columns = [
        {field:"id",headerName:"Customer No." },
        {field:"business_code",headerName:"Business Code" },
        {field:"cust_number",headerName:"Customer Number" },
        {field:"clear_date",headerName:"Clear Date" },
        {field:"business_year",headerName:"Business Year" },
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
        {field:"invoice_id",headerName:"Invoice ID", },
        {field:"aging_bucket",headerName:"Aging Bucket", }

    ];
    const [rows, setRows] = React.useState([]);
    const [tot,setTot] = useState(0);
    React.useEffect( async ()=>{
        setRows(await getData());
        setTot(await getTotal());
    },[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [customer, setCustomer] = useState({
        id : tot+1,
        cust_number:"",
        posting_id:"",
        invoice_id:"",
        isOpen:"1",
        is_deleted:"0",
        total_open_amount:"",
        business_code:"",
        doc_id:"",
        clear_date:"25-01-2022",
        business_year:"",
        posting_date:"25-01-2022",
        document_create_date:"25-01-2022",
        document_create_date1:"25-01-2022",
        due_in_date:"25-01-2022",
        invoice_currency:"",
        document_type:"",
        area_business:"",
        baseline_create_date:"25-01-2022",
        cust_payment_terms:"",
        aging_bucket:"NA"
    });
    const {id,cust_number,posting_id,invoice_id,isOpen,is_deleted,total_open_amount,
        business_code,doc_id,clear_date,business_year,posting_date,document_create_date,document_create_date1,
        due_in_date,invoice_currency,document_type,area_business,baseline_create_date,
        cust_payment_terms,aging_bucket} = customer;
    customer.id = tot+1;
    const changeHandler = (e)=>{
        const {id,value} = e.target;
        setCustomer({...customer,[id]:value})
    }


    const [pageSize, setPageSize] = React.useState(10);

    let submitHandler = async (e) => {
        e.preventDefault();
        let ret = addCostumer(customer);

        if (!ret) {
            alert("Fill All Fields")
        }
        setRows(await getData());
        setTot(tot + 1);
        setCustomer({
            id: tot + 1,
            cust_number: "",
            posting_id: "",
            invoice_id: "",
            isOpen: "1",
            is_deleted: "0",
            total_open_amount: "",
            business_code: "",
            doc_id: "",
            clear_date: "",
            business_year: "",
            posting_date: "",
            document_create_date: "",
            document_create_date1: "",
            due_in_date: "",
            invoice_currency: "",
            document_type: "",
            area_business: "",
            baseline_create_date: "",
            cust_payment_terms: "",
            aging_bucket: "NA"
        });
    }

    return (
        <>
        <AddCustomer id={id} cust_number={cust_number} posting_id={posting_id} invoice_id={invoice_id}
                     isOpen={isOpen} is_deleted={is_deleted} total_open_amount={total_open_amount}
                     business_code={business_code} doc_id={doc_id} clear_date={clear_date} business_year={business_year}
                     posting_date={posting_date} document_create_date={document_create_date} document_create_date1={document_create_date1} due_in_date={due_in_date}
                     invoice_currency={invoice_currency} document_type={document_type} area_business={area_business}
                     baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms} aging_bucket={aging_bucket}
                     changeHandler={changeHandler} submitHandler={submitHandler}/>
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
        </>
    );
}
export default DataToDisplay