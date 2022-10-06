// import image from './Images/image.jpg'
import Navbar from './Navbar';
import carouselImages from '../Data/CarouselData'
import {useEffect, useState } from 'react';
import {Link} from "react-router-dom"

const Header = ()=> {
   const [currImg, setCurrImg] = useState(0);
   useEffect(()=>{
    setTimeout(()=>{
        if(currImg>= 2){
            setCurrImg(0)
        }else{
            setCurrImg(currImg + 1)
        }
    }, 4000)
   });  <img className='carouselImages' src={carouselImages[currImg].Image} alt="clothing" />

   
return(
    <div className="header">
        <Navbar></Navbar>
        
        <div className='carouselContainer'>
        <div>
        <img className='carouselImages' src={carouselImages[currImg].Image} alt="clothing" />
        <div className='HeadingContainer' >
        <h1 className='CarouselHead'>Ell'st Belle Collections</h1>
        <p className='carouselText'>{carouselImages[currImg].Text}</p>
        <Link to={"/Collectionscreen"}className= "link"> SHOP NOW</Link>
    </div>

        </div>
        
       
        </div>
    </div>
            
)
}
export default Header