import Ayurveda from "./Ayurveda";
import Welcome from "./Welcome";
import Yogaschool from "./Yogaschool";
import Offering from "./Offering";
import Carousal from "./Carousal";
import Contact from "./Contact";
import Utube from "./Utube";
import Ratings from "./Ratings";
import Questions from "./Questions";
import Accordion from "./Accordion";
import Ourservice from "./Ourservice";
import Package1 from "./Package1";
import Package2 from "./Package2";
import Kumbh from "./Kumbh";
import KumbhAcomodation from "./kumbhAcomodation";
import AyurvedCarousel from "./AyurvedCarousel";
import Bath from "./Bath";
import WelcomeToYogalayaa from "./HomeCredentials/WelcomeToYogalayaa";
import WhyChoose from "./HomeCredentials/WhyChoose";


import YogaTeachers from "./Teachers/YogaTeachers";
import Servicess from "./Services/Servicess";
import Schedule from "./Teachers/Schedule";
import ImageSliderBanner from "./Banner/ImageSliderBanner ";
import Blog from "./Blog/Blog";
import guru from '../images/sadguru.webp'
import BannerImage from "./HomeCredentials/BannerImage";

import Training200 from "./Services/Service1/Training200";
import HouseOfYoga from "./Services/Service1/HouseOfYoga";

import a from '../images/services/200.webp'
import YogaTrainingPromo from "./Services/Service1/YogaTrainingPromo ";
import Transformation from "./Services/Service1/Transformation";
import TransTeach from "./Services/Service1/TransTeach";
import Service1 from "./Services/Service1/Service1";
import Gallery from "./HomeCredentials/Gallery";
const Home = () => {
    return ( 
        <>


      {/* <YogaTrainingSection/> */}
        {/* <Welcome/> */}
       
{/* <YogaTrainingSection/>
        {/* <Package1/>
        <Package2/> */}

         <ImageSliderBanner/>
        <WelcomeToYogalayaa/>


        <Yogaschool/>
        {/* <Service1/> */}
        {/* <Training200/>  */}
       {/* <HouseOfYoga backgroundImage={a} />
       <YogaTrainingPromo/>
       <Transformation backgroundImage={a}/>
       <TransTeach/> */}
        <WhyChoose/>
        <Ayurveda/> 

<Offering/>

  

<Servicess/>
 
<BannerImage/>
<YogaTeachers/>

      
      <Schedule/>
 
      <Blog/>
<Gallery/>
     <Utube/>
      {/* <AyurvedCarousel/> */}
      
   {/* <Ourservice/> */}
   {/* <Kumbh/> */}
   {/* <Bath/> */}
      {/* <Carousal/> */}
      {/* <KumbhAcomodation/> */}

      {/* <Questions/> */}
      <Accordion/>
      <Ratings/>
      <Contact/>
        </>
     );
}
 
export default Home;