import './index.css'
import {Button} from "@mui/material";
import * as React from "react";



const Buttons = ()=>{
    return(
        <>
            <div className="container">
                <div className='grp-1'>
                    <Button variant="outlined">Predict</Button>
                    <Button variant="outlined">Analytic View</Button>
                    <Button variant="outlined">Advanced Search</Button>
                </div>
                <div className='grp-2'>
                    <Button variant="outlined" >Search</Button>
                </div>
                <div className='grp-3'>
                    <Button variant="outlined">Edit</Button>
                </div>


            </div>
        </>
    );
}
export default Buttons