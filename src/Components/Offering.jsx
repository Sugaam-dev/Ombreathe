import { useEffect } from 'react';
import '../Styles/offering.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Offering() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="offering">
        <div className="offerheading">
          <p>what we offerings</p>
          <h1>Discover Our Holistic Offering</h1>
          <img src="./images/lg.png" alt="logo" />
        </div>
        
        <div className="oo">
          <div className="offeringcards">
            <div className="card1" data-aos="fade-up">
              <div className="cardimg">
                <img src="./images/images-P7DZJ4W.jpg" alt="Yoga and meditation" />
              </div>
              <div className="cardcontent">
                <img src="./images/050-mortar.png" alt="Yoga icon" />
                <h2>Yoga and meditation</h2>
                <p>Yoga and meditation cultivate inner peace, balance, and mindfulness. They enhance physical health, reduce stress, and connect body, mind, and spirit for overall well-being.</p>
                <Link to='/contact'>
                  <button>Discover more</button>
                </Link>
              </div>
            </div>

            <div className="card1" data-aos="fade-up">
              <div className="cardimg">
                <img src="./images/images-77XKX4V.jpg" alt="Abhyanga Massage Therapy" />
              </div>
              <div className="cardcontent">
                <img src="./images/003-lotus.png" alt="Lotus icon" />
                <h2>Abhyanga Massage Therapy</h2>
                <p>Abhyanga massage therapy is an ancient Ayurvedic practice using warm herbal oils to nourish the skin, improve circulation, relieve stress, and promote deep healing and relaxation.</p>
                <Link to='/contact'>
                  <button>Discover more</button>
                </Link>
              </div>
            </div>

            <div className="card1" data-aos="fade-up">
              <div className="cardimg">
                <img src="./images/images-3DAYAFT.jpg" alt="Prenatal Yoga Teacher Training" />
              </div>
              <div className="cardcontent">
                <img src="./images/036-yoga.png" alt="Yoga pose icon" />
                <h2>Prenatal Yoga Teacher Training Course</h2>
                <p>Prenatal Yoga Teacher Training Course equips instructors to safely guide expectant mothers through yoga, promoting strength, flexibility, relaxation, and emotional well-being during pregnancy.</p>
                <Link to='/contact'>
                  <button>Discover more</button>
                </Link>
              </div>
            </div>

            <div className="card1" data-aos="fade-up">
              <div className="cardimg">
                <img src="./images/images-U2433N4 (1).jpg" alt="Ayurveda" />
              </div>
              <div className="cardcontent">
                <img src="./images/028-nutrition.png" alt="Nutrition icon" />
                <h2>Ayurveda</h2>
                <p>Ayurveda is an ancient holistic healing system from India that balances body, mind, and spirit through natural remedies, diet, lifestyle practices, and herbal treatments.</p>
                <Link to='/contact'>
                  <button>Discover more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offering;