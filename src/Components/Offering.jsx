import { useEffect} from 'react';
import '../Styles/offering.css'
import {Link} from 'react-router-dom'
import 'aos/dist/aos.css'
import Aos from 'aos';
function Offering ()  {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
    return ( 

        <>
        <div className="offering">
        <div className="offerheading">
            <p>what we offering</p>

            <h1>Discover Our Holistic Offerings</h1>
            <img src="./images/lg.png" alt="logo" />
        </div>
        <div className="oo">
        <div className="offeringcards">
       

<div className="card1"  data-aos="fade-up">
    <div className="cardimg">
    <img src="./images/images-P7DZJ4W.jpg" alt="" />
              
    </div>
    <div className="cardcontent">
    <img src="./images/050-mortar.png" alt="" />
                    <h1>Yoga and meditation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                    <Link to='/contact'> <button>Discover more</button></Link>
    </div>
</div>
<div className="card1"  data-aos="fade-up">
    <div className="cardimg">
    <img src="../images/images-77XKX4V.jpg" alt="" />
              
    </div>
    <div className="cardcontent">
    <img src="./images/003-lotus.png" alt="" />
                    <h1>Ybhyanga Massage Theraphy</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                    <Link to='/contact'> <button>Discover more</button></Link>
    </div>
</div>
<div className="card1" data-aos="fade-up">
    <div className="cardimg">
    <img src="./images/images-3DAYAFT.jpg" alt="" />
              
    </div>
    <div className="cardcontent">
    <img src="./images/036-yoga.png" alt="" />
                    <h1>Yoga and meditation </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                    <Link to='/contact'> <button>Discover more</button></Link>
    </div>
</div>
<div className="card1" data-aos="fade-up">
    <div className="cardimg">
    <img src="./images/images-U2433N4 (1).jpg" alt="" />
              
    </div>
    <div className="cardcontent">
    <img src="./images/028-nutrition.png" alt="" />
                    <h1>Ayurveda</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                   <Link to='/contact'> <button>Discover more</button></Link>
    </div>
</div>
  </div>
        </div>
        </div>
        </>
     );
}
 
export default Offering;