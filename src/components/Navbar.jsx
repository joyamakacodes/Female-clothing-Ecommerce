import {Link} from  "react-router-dom";
import logo from "../Images/logo.jpg"
import '../assets/css/line-awesome.css';
const Navbar = ()=>{
    return(
        <div className="Navbar">
        <img src={logo} alt="logo" className="logo"/>
                <div className="Links">
                    <Link to={'/'} className="link">HOME</Link> 
                    <Link to={'/Aboutscreen'} className="link">ABOUT</Link>
                    <Link to={'/Collectionscreen'} className="link">COLLECTIONS</Link> 
                    <Link to={'/Contactscreen'}className="link">CONTACT US</Link>  
                </div>
                <div className="form">
                    <form>
                        <input type="search" className="search"/>
                        <button className= "searchBtn">Search</button>
                    </form>
                </div>
                <div className="btnContainer">
            <div> <button className="btn">LOG IN</button></div>
           <div><button className="btn">SIGN UP</button></div>
           <div className=" las la-shopping-cart cart"></div>
            
        </div>
            
    </div>
    )
};

export default Navbar