import './index.css'
import Product_Logo from '../../Resources/Images/Colored_Logo.png'
import HRC_Logo from '../../Resources/Images/HighRadius-Trifecta-2020.png'
const TopDisplay  = () =>{
    return(
    <>
        <div className='container topBar'>
            <div className='Logo_1'>
                <img className='cont_1' alt="Remy Sharp" src={Product_Logo}/>
                <span className='cont_2'>
                    ABC Products
                </span>
            </div>
            <div className='Logo_2'>
                <img className='cont_2_1' alt="Highradius Logo" src={HRC_Logo}/>
            </div>
        </div>
    </>
    );
}
export default TopDisplay