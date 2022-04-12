import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const AddCustomer =  ({id,cust_number,posting_id,invoice_id,isOpen,is_deleted,total_open_amount,
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
export default AddCustomer