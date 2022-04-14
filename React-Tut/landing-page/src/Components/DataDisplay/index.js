import * as React from "react";
import {DataGrid,GridRowParams} from "@mui/x-data-grid";
import './index.css'
import {addCostumer, editCostumer, getData, getTotal, SearchAdvanced} from "../services/Data"
import {useState} from "react";
import {AddCustomer, DeleteCustomer, EditCustomer, SearchCustomer} from "../AddCust";
import {AdvancedSearch} from "../AdvancedSearch";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import {DialogContentText} from "@mui/material";
import Analytics from "../Analytics";
import Predict from "../Predict";

export let selectedId = [];
export let select_customer = {};

const DataToDisplay = ()=>{
    const columns = [
        {field:"id",headerName:"Sl No",width:70,align:"center"},
        {field:"business_code",headerName:"Business Code" ,width:120,align:"center"},
        {field:"cust_number",headerName:"Customer Number",width:120,align:"center"},
        {field:"clear_date",headerName:"Clear Date" ,width:120,align:"center"},
        {field:"buisness_year",headerName:"Business Year" ,width:120,align:"center"},
        {field:"doc_id",headerName:"Document ID" ,width:120,align:"center"},
        {field:"posting_date",headerName:"Posting Date" ,width:120,align:"center"},
        {field:"document_create_date",headerName:"Document Create Date" ,width:120,align:"center"},
        {field:"due_in_date",headerName:"Due Date" ,width:120,align:"center"},
        {field:"invoice_currency",headerName:"Invoice Currency",width:120,align:"center" },
        {field:"document_type",headerName:"Document Type" ,width:120,align:"center"},
        {field:"posting_id",headerName:"Posting ID" ,width:120,align:"center"},
        {field:"total_open_amount",headerName:"Total Open Amount",width:120,align:"center" },
        {field:"baseline_create_date",headerName:"Baseline Create Date",width:120,align:"center" },
        {field:"cust_payment_terms",headerName:"Payment Term[s]",width:120,align:"center" },
        {field:"invoice_id",headerName:"Invoice ID",width:120,align:"center" },
        {field:"aging_bucket",headerName:"Aging Bucket",width:120,align:"center" }

    ];
    const [rows, setRows] = React.useState([]);
    const [tot,setTot] = useState(0);
    const [selectionModel, setSelectionModel] = React.useState([]);
    // const [checkboxSelection, setCheckboxSelection] = React.useState(true);

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
        clear_date:"2022-01-25",
        business_year:"",
        posting_date:"2022-01-25",
        document_create_date:"2022-01-25",
        document_create_date1:"2022-01-25",
        due_in_date:"2022-01-25",
        invoice_currency:"",
        document_type:"",
        area_business:"",
        baseline_create_date:"2022-01-25",
        cust_payment_terms:"",
        aging_bucket:"NA"
    });
    const {id,cust_number,posting_id,invoice_id,isOpen,is_deleted,total_open_amount,
        business_code,doc_id,clear_date,business_year,posting_date,document_create_date,document_create_date1,
        due_in_date,invoice_currency,document_type,area_business,baseline_create_date,
        cust_payment_terms,aging_bucket} = customer;
    customer.id = tot+1;

    const [pageSize, setPageSize] = React.useState(20);
    const changeHandler = (e)=>{
        const {id,value} = e.target;
        setCustomer({...customer,[id]:value})
    }
    let submitHandler = async (e) => {
        e.preventDefault();
        await addCostumer(customer);
        setCustomer({
            id : tot+1,
            cust_number:"",
            posting_id:"",
            invoice_id:"",
            isOpen:"1",
            is_deleted:"0",
            total_open_amount:"",
            business_code:"",
            doc_id:"",
            clear_date:"2022-01-25",
            business_year:"",
            posting_date:"2022-01-25",
            document_create_date:"2022-01-25",
            document_create_date1:"2022-01-25",
            due_in_date:"2022-01-25",
            invoice_currency:"",
            document_type:"",
            area_business:"",
            baseline_create_date:"2022-01-25",
            cust_payment_terms:"",
            aging_bucket:"NA"
        });
        setRows(await getData());
        setTot(await getTotal());
    }
    const AdvancedSearch = ()=>{
        const [openEdit, setOpenEdit] = React.useState(false);
        const [customer, setCustomer] = useState({
            cust_number: "",
            invoice_id: "",
            doc_id: "",
            business_year: "",
        });
        const handleClickOpenEdit = () => {
            setOpenEdit(true);
        };

        let handleCloseEdit = () => {
            setOpenEdit(false);
        };


        let submitHandler = async (e) => {
            e.preventDefault();
            if(customer.cust_number=== "" && customer.invoice_id === "" && customer.doc_id === "" && customer.business_year === ""){
                alert("Please enter at least one search criteria");
            }
            else{
                let ret = await SearchAdvanced(customer);
                if(ret){
                    setRows(ret);
                    setCustomer({
                        cust_number: "",
                        invoice_id: "",
                        doc_id: "",
                        business_year: "",
                    });
                }
                else{
                    alert("No data found")
                    setCustomer({
                        cust_number: "",
                        invoice_id: "",
                        doc_id: "",
                        business_year: "",
                    });
                }
            }
        }

        const handleCloseEditSubmit=(e)=>{
            submitHandler(e);
            // window.location.reload();
            handleCloseEdit();
        }


        function changeHandler(e) {
            const {id,value} = e.target;
            setCustomer({...customer,[id]:value});
        }

        return<>
            <Button variant="outlined" onClick={handleClickOpenEdit}>
                Advanced Search
            </Button>
            <Dialog open={openEdit} onClose={handleCloseEdit} fullWidth={true} maxWidth={'md'}>
                <DialogTitle>Advanced Search</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Advanced Search Will Also Show Soft Deleted Data
                    </DialogContentText>
                    <TextField
                        required
                        margin="normal"
                        id="cust_number"
                        value={customer.cust_number}
                        label="Customer Number"
                        type="number"
                        variant="standard"
                        onChange={changeHandler}
                    />
                    <TextField
                        margin="normal"
                        id="business_year"
                        value={customer.business_year}
                        label="Business Year"
                        type="string"
                        variant="standard"
                        onChange={changeHandler}
                    />
                    <TextField

                        margin="normal"
                        id="doc_id"
                        value={customer.doc_id}
                        label="Document Id"
                        type="number"

                        variant="standard"
                        onChange={changeHandler}
                    />
                    <TextField
                        margin="normal"
                        id="invoice_id"
                        value={customer.invoice_id}
                        label="Invoice Id"
                        type="number"
                        variant="standard"
                        onChange={changeHandler}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit} fullWidth variant="outlined" color="primary">Close</Button>
                    <Button onClick={handleCloseEditSubmit} fullWidth variant="contained" color="success" >Search</Button>
                </DialogActions>
            </Dialog>
        </>
    }
    return (
        <>
            <br/>
            <span className="space"></span>
            <Predict/>
            <Analytics/>
            <AdvancedSearch/>
            <span className="space"></span>
            <span className="space"></span>
            <SearchCustomer/>
            <span className="space"></span>
            <span className="space"></span>
            <span className="space"></span>
            <AddCustomer id={id} cust_number={cust_number} posting_id={posting_id} invoice_id={invoice_id}
                         isOpen={isOpen} is_deleted={is_deleted} total_open_amount={total_open_amount}
                         business_code={business_code} doc_id={doc_id} clear_date={clear_date} business_year={business_year}
                         posting_date={posting_date} document_create_date={document_create_date} document_create_date1={document_create_date1} due_in_date={due_in_date}
                         invoice_currency={invoice_currency} document_type={document_type} area_business={area_business}
                         baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms} aging_bucket={aging_bucket}
                         changeHandler={changeHandler} submitHandler={submitHandler}/>
            <span className="space"></span>
            <span className="space"></span>
            <span className="space"></span>
            <EditCustomer/>
            <span className="space"></span>
            <span className="space"></span>
            <span className="space"></span>
            <DeleteCustomer/>
            <div className='Data_Grid'>
                <DataGrid
                    rows={rows}
                    rowHeight={30}
                    columns={columns}
                    headerHeight={70}
                    pageSize={pageSize}
                    pagination
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel,e) => {
                        setSelectionModel(newSelectionModel);
                        selectedId = newSelectionModel;
                    }}
                    selectionModel={selectionModel}
                    rowsPerPageOptions={[20,50,100]}
                    onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
                    onRowClick = {(e,row)=>{
                        select_customer = e.row;
                    }}
                />
            </div>
        </>
    );
}
export default DataToDisplay