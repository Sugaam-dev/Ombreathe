import '../Styles/welcome.css'
import AutoTyping from './AutoTyping';
import { Link} from 'react-router-dom';
const welcome = () => {

    const texts = [
        'Holistic Yoga Training.',
        'Kundalini Yoga Courses.',
        'Retreats & Workshops.',
      ];
    return (
        <>
      
        <div className="welcome">
<div className="homeImage">
<img src="./images/ezgif-4-7828d5231b-removebg-preview.png" alt="gjgughkjhb" />
</div>
<div className="homeContent">
    <h2>
    Welcome To The Himalayas For</h2>

    <div className="type">
    <span>{<AutoTyping texts={texts} speed={100} delay={1500} />}</span> 
    </div>
       
     
 <p>Soulfit is your home and that is the goal of life. Come learn, celebrate and be enlightened.Welcome to your own home</p>


 <Link to='/about'><button>Know more</button></Link>
</div>
        </div>
        </>
      );
}
 
export default welcome;