const AddCustomer =  ({id,cust_number,posting_id,invoice_id,isOpen,is_deleted,total_open_amount,
                          business_code,doc_id,clear_date,business_year,posting_date,
                          document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,
                          area_business,baseline_create_date,cust_payment_terms,aging_bucket , changeHandler,submitHandler}) => {
    return<>
        <form className="myTable">
            <label>Customer id :  </label>
            <input name="id" value={id} onChange={changeHandler} type="number" disabled/>
            <label>Customer Number :  </label>
            <input name="cust_number" value={cust_number}   type="number" onChange={changeHandler}/>
            <label>Posting id :  </label>
            <input name="posting_id" value={posting_id}   type="number" onChange={changeHandler}/>
            <br/>
            <label>Invoice Id :  </label>
            <input name="invoice_id" value={invoice_id}   type="number"  onChange={changeHandler}/>
            <label>total open Amount :  </label>
            <input name="total_open_amount" value={total_open_amount}   type="number" onChange={changeHandler}/>
            <label>Business Code :  </label>
            <input name="business_code" value={business_code} maxLength= "40" onChange={changeHandler}/>
            <label>Doc Id :  </label>
            <input name="doc_id" value={doc_id} maxLength= "10" onChange={changeHandler}/>
            <br/>
            <label>Clear Date :  </label>
            <input name="clear_date" value={clear_date}  type="date" onChange={changeHandler}/>
            <label>Business Year :  </label>
            <input name="business_year" value={business_year}  type="number" onChange={changeHandler}/>
            <label>Posting Date :  </label>
            <input name="posting_date" value={posting_date}  type="date" onChange={changeHandler}/>
            <br/>
            <label>Document Create Date :  </label>
            <input name="document_create_date" value={document_create_date}  type="date" onChange={changeHandler}/>
            <label>Document Create Date1 :  </label>
            <input name="document_create_date1" value={document_create_date1}  type="date" onChange={changeHandler}/>
            <label>Due In Date :  </label>
            <input name="due_in_date" value={due_in_date} type="date" onChange={changeHandler}/>
            <br/>
            <label>Invoice Currency :  </label>
            <input name="invoice_currency" value={invoice_currency} maxLength= "5" onChange={changeHandler}/>
            <label>Document Type :  </label>
            <input name="document_type" value={document_type} maxLength= "5" onChange={changeHandler}/>
            <label>Area Business :  </label>
            <input name="area_business" value={area_business} maxLength= "5" onChange={changeHandler}/>
            <br/>
            <label>Baseline Create Date :  </label>
            <input name="baseline_create_date" value={baseline_create_date}  type="date" onChange={changeHandler}/>
            <label>Customer Payment Terms :  </label>
            <input name="cust_payment_terms" value={cust_payment_terms} maxLength= "40" onChange={changeHandler}/>
            <label>Aging Bucket :  </label>
            <input name="aging_bucket" value={aging_bucket}  disabled onChange={changeHandler}/>
            <br/>
            <button type="submit" value="Add Customer" onClick={submitHandler}>Submit</button>
        </form>
    </>
}
export default AddCustomer