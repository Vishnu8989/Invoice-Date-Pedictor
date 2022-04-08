import axios from "axios";

export const getData= async () =>{
    let response = await axios.get("http://localhost:8080/Final/Fetch");
    return response.data.customers
}
export default getData();