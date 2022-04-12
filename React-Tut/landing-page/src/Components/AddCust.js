import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {selectedId, select_customer} from './DataDisplay/index'
import {deleteCustomer, editCostumer, getData} from "./services/Data";
import {useState} from "react";

export const DeleteCustomer = ()=>{
    const handleClickDelete = () => {
        let total = 0;
        for (let selectedIdKey in selectedId) {
            console.log("Id we got : ", selectedId[selectedIdKey]);
            let deleteResp = deleteCustomer(selectedId[selectedIdKey]);
            console.log("Delete Response for : ", deleteResp);
            total++;
        }
        alert("Total Deleted : " + total);
        window.location.reload();
    };

    return(
        <>
        <Button variant="outlined" onClick={handleClickDelete}>
            Delete Customer
        </Button>
        </>
    );
}

export const EditCustomer = ()=>{
    const [openEdit, setOpenEdit] = React.useState(false);
    const [customer, setCustomer] = useState({
        id : select_customer.id,
        cust_number: select_customer.cust_number,
        posting_id: select_customer.posting_id,
        invoice_id: select_customer.invoice_id,
        isOpen: select_customer.isOpen,
        is_deleted: select_customer.is_deleted,
        total_open_amount: select_customer.total_open_amount,
        business_code: select_customer.business_code,
        doc_id: select_customer.doc_id,
        clear_date: select_customer.clear_date,
        business_year: select_customer.business_year,
        posting_date: select_customer.posting_date,
        document_create_date: select_customer.document_create_date,
        document_create_date1: select_customer.document_create_date1,
        due_in_date: select_customer.due_in_date,
        invoice_currency: select_customer.invoice_currency,
        document_type: select_customer.document_type,
        area_business:  select_customer.area_business,
        baseline_create_date:  select_customer.baseline_create_date,
        cust_payment_terms:  select_customer.cust_payment_terms,
        aging_bucket:  select_customer.aging_bucket
    });
    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };
    function CheckData() {
        if(selectedId.length === 0){
            alert("Please select at least one customer to edit");
            return false;
        }
        else if(selectedId.length > 1){
            alert("Please select only one customer to edit");
            return false;
        }
        else{
            setCustomer(select_customer);
            console.log(select_customer)
            console.log("Now printing Customer")
            console.log(customer)
            handleClickOpenEdit()
            return true;
        }
    }

    let handleCloseEdit = () => {
        setOpenEdit(false);
    };


    let submitHandler = async (e) => {
        e.preventDefault();
        let ret = editCostumer(customer);
        window.location.reload();
        setCustomer({
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
        <Button variant="outlined" onClick={CheckData}>
            Edit Customer
        </Button>
        <Dialog open={openEdit} onClose={handleCloseEdit}>
            <DialogTitle>Add</DialogTitle>
            <DialogContent>
                <TextField
                    margin="normal"
                    id="business_code"
                    value={customer.business_code}
                    label="Business Code"
                    type="text"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="cust_number"
                    value={customer.cust_number}
                    label="Customer Number"
                    type="number"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    InputLabelProps={{ shrink: true }}

                    margin="normal"
                    id="clear_date"
                    value={customer.clear_date}
                    label="Clear Date"
                    type="date"

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
                    onChange={customer.changeHandler}
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
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    id="posting_date"
                    value={customer.posting_date}
                    label="Posting Date"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="document_create_date"
                    value={customer.document_create_date}
                    label="Document Create Date"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    margin="normal"
                    id="document_create_date1"
                    value={customer.document_create_date1}
                    label="Document Create Date1"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    margin="normal"
                    id="due_in_date"
                    value={customer.due_in_date}
                    label="Due Date"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField

                    margin="normal"
                    id="invoice_currency"
                    value={customer.invoice_currency}
                    label="Invoice Currency"
                    type="text"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="document_type"
                    value={customer.document_type}
                    label="Document Type"
                    type="text"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="posting_id"
                    value={customer.posting_id}
                    label="Posting id"
                    type="number"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="total_open_amount"
                    value={customer.total_open_amount}
                    label="Total Open Amount"
                    type="number"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    InputLabelProps={{ shrink: true }}

                    margin="normal"
                    id="baseline_create_date"
                    value={customer.baseline_create_date}
                    label="Baseline Create Date"
                    type="date"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField

                    margin="normal"
                    id="cust_payment_terms"
                    value={customer.cust_payment_terms}
                    label="Customer Payment Terms"
                    type="text"

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
                <TextField
                    margin="normal"
                    id="area_business"
                    value={customer.area_business}
                    label="Area Business"
                    type="text"
                    variant="standard"
                    onChange={changeHandler}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseEdit}>Cancel</Button>
                <Button onClick={handleCloseEditSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    </>
}

export const AddCustomer =  ({id,cust_number,posting_id,invoice_id,isOpen,is_deleted,total_open_amount,
                          business_code,doc_id,clear_date,business_year,posting_date,
                          document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,
                          area_business,baseline_create_date,cust_payment_terms,aging_bucket , changeHandler,submitHandler}) => {

    const [openAdd, setOpenAdd] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const handleCloseAddSubmit=(e)=>{
        submitHandler(e);
        window.location.reload();
        handleCloseAdd();
    }
    return<>
        <Button variant="outlined" onClick={handleClickOpenAdd}>
            Add Customer
        </Button>
        <Dialog open={openAdd} onClose={handleCloseAdd} fullWidth={fullWidth} maxWidth={maxWidth}>
            <DialogTitle>Add</DialogTitle>
            <DialogContent>
                <TextField
                    margin="normal"
                    id="business_code"
                    value={business_code}
                    label="Business Code"
                    type="text"
                    variant="standard"
                    onChange={changeHandler}
                />
                    <TextField

                        margin="normal"
                        id="cust_number"
                        value={cust_number}
                        label="Customer Number"
                        type="number"
                        variant="standard"
                        onChange={changeHandler}
                    />
                <TextField
                    InputLabelProps={{ shrink: true }}

                    margin="normal"
                    id="clear_date"
                    value={clear_date}
                    label="Clear Date"
                    type="date"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField

                    margin="normal"
                    id="business_year"
                    value={business_year}
                    label="Business Year"
                    type="number"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField

                    margin="normal"
                    id="doc_id"
                    value={doc_id}
                    label="Document Id"
                    type="number"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                    id="posting_date"
                    value={posting_date}
                    label="Posting Date"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="document_create_date"
                    value={document_create_date}
                    label="Document Create Date"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    margin="normal"
                    id="document_create_date1"
                    value={document_create_date1}
                    label="Document Create Date1"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    margin="normal"
                    id="due_in_date"
                    value={due_in_date}
                    label="Due Date"
                    type="date"
                    variant="standard"
                    onChange={changeHandler}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField

                    margin="normal"
                    id="invoice_currency"
                    value={invoice_currency}
                    label="Invoice Currency"
                    type="text"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="document_type"
                    value={document_type}
                    label="Document Type"
                    type="text"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="posting_id"
                    value={posting_id}
                    label="Posting id"
                    type="number"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="total_open_amount"
                    value={total_open_amount}
                    label="Total Open Amount"
                    type="number"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    InputLabelProps={{ shrink: true }}

                    margin="normal"
                    id="baseline_create_date"
                    value={baseline_create_date}
                    label="Baseline Create Date"
                    type="date"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField

                    margin="normal"
                    id="cust_payment_terms"
                    value={cust_payment_terms}
                    label="Customer Payment Terms"
                    type="text"

                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="invoice_id"
                    value={invoice_id}
                    label="Invoice Id"
                    type="number"
                    variant="standard"
                    onChange={changeHandler}
                />
                <TextField
                    margin="normal"
                    id="area_business"
                    value={area_business}
                    label="Area Business"
                    type="text"
                    variant="standard"
                    onChange={changeHandler}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseAdd}>Cancel</Button>
                <Button onClick={handleCloseAddSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    </>
}
