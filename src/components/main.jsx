import card1 from "../Images/homePage1.jpg";
import card2 from "../Images/homePage2.jpg";
import card3 from "../Images/homepage4.jpg";

const Main =()=>{
return(
    <div>
        <h1 className="mainHead">Explore Our Collections</h1>
        <div className="cardContainer">
            <div >
                <img className="cardImage" src={card1} alt="dress" />
                <img className="cardImage" src={card2} alt="dress2" />
                <img className="cardImage" src={card3} alt="dress3" />
            </div>
        </div>
    </div>
)
}
export default Main