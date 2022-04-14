import axios from "axios";

export const getData= async () =>{
    let response = await axios.get("http://localhost:8080/Final/Fetch");
    return response.data.customers;
}

export const getTotal= async () =>{
    let response = await axios.get("http://localhost:8080/Final/Fetch");
    console.log("Data returned "+response.data.totalCustomers)
    return response.data.totalCustomers
}

export const addCostumer= async (c) =>{
    console.log(c)
    let toSend = "http://localhost:8080/Final/AddCustomer?"
        +"id="+c.id
        +"&cust_number="+c.cust_number
        +"&posting_id="+c.posting_id
        +"&invoice_id="+c.invoice_id
        +"&isOpen="+c.isOpen+
        "&is_deleted="+c.is_deleted+
        "&total_open_amount="+c.total_open_amount+
        "&business_code="+c.business_code+
        "&doc_id="+c.doc_id+
        "&clear_date="+c.clear_date+
        "&business_year="+c.business_year+
        "&posting_date="+c.posting_date+
        "&document_create_date="+c.document_create_date+
        "&document_create_date1="+c.document_create_date1+
        "&due_in_date="+c.due_in_date+
        "&invoice_currency="+c.invoice_currency+
        "&document_type="+c.document_type+
        "&area_business="+c.area_business+
        "&baseline_create_date="+c.baseline_create_date+
        "&cust_payment_terms="+c.cust_payment_terms+
        "&aging_bucket="+c.aging_bucket;
    await axios.get(toSend);
    console.log(toSend);
    console.log("Data "+toSend+" was sent to backend");
}

export const deleteCustomer= async (id) =>{
    let toSend = "http://localhost:8080/Final/DeleteCustomer?id="+id;
    console.log("Data "+toSend+" was sent to backend");
    let x = await axios.get(toSend);
    console.log("Data "+toSend+" was sent to backend with response "+x.data);
}

export const editCostumer= async (c) =>{
    console.log(c)
    let toSend = "http://localhost:8080/Final/EditCustomer?"
        +"id="+c.id
        +"&cust_number="+c.cust_number
        +"&posting_id="+c.posting_id
        +"&invoice_id="+c.invoice_id
        +"&isOpen="+c.isOpen+
        "&is_deleted="+c.is_deleted+
        "&total_open_amount="+c.total_open_amount+
        "&business_code="+c.business_code+
        "&doc_id="+c.doc_id+
        "&clear_date="+c.clear_date+
        "&business_year="+c.business_year+
        "&posting_date="+c.posting_date+
        "&document_create_date="+c.document_create_date+
        "&document_create_date1="+c.document_create_date1+
        "&due_in_date="+c.due_in_date+
        "&invoice_currency="+c.invoice_currency+
        "&document_type="+c.document_type+
        "&area_business="+c.area_business+
        "&baseline_create_date="+c.baseline_create_date+
        "&cust_payment_terms="+c.cust_payment_terms+
        "&aging_bucket="+c.aging_bucket;
    console.log(toSend)
    await axios.get(toSend);
    console.log("Data "+toSend+" was sent to backend");
}

export const getDataByID= async (id) =>{
    let response = await axios.get("http://localhost:8080/Final/SearchById?id="+id);
    let found = response.data.Found;
    if(found){
        let result = response.data.SearchedCustomer;
        return result
    }
    else{
        return null;
    }
}

export const SearchAdvanced =async (c)=>{
    //replace null vals with -1
    for(let i in c){
        if(c[i]===""){
            c[i]="-99";
        }
    }
    console.log(c)
    let toSend = "http://localhost:8080/Final/SearchAdvanced?"
        +"&cust_number="+c.cust_number
        +"&invoice_id="+c.invoice_id
        +"&doc_id="+c.doc_id
        +"&business_year="+c.business_year;
    console.log(toSend)
    let response = await axios.get(toSend);
    let found = response.data.Found;
    if(found){
        let result = response.data.Response;
        console.log("Searched for year : "+c.business_year)
        console.log("Searched for Document id : "+c.doc_id)
        console.log("Searched for Customer Number : "+c.cust_number)
        console.log("Searched for Invoice Id : "+c.invoice_id)
        console.log(result)
        return result
    }
    else{
        return null;
    }
}

export const GetAnalyticsData = async ()=>{
    let response = await axios.get("http://localhost:8080/Final/AnalyticsA");
    const ret = response.data.Companies;
    // console.log(ret)
    return ret;

}