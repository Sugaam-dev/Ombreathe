import React, { useState } from 'react';
import '../Styles/Accordion.css'
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: 'What makes your yoga teacher training program unique in Soulfit?',
      content: 'At our yoga school in Rishikesh, we focus on a holistic approach to yoga teacher training that goes beyond just asanas. Our program combines ancient yogic practices with modern teaching methods, ensuring our graduates are well-equipped to teach yoga in todays world.',
    },
    {
      title: 'What qualifications do your yoga teachers have?',
      content: 'All our teachers at our yoga school in Rishikesh are certified by Yoga Alliance, with years of experience in practicing and teaching yoga. They bring a wealth of knowledge and expertise to our yoga TTC.',
    },
    {
      title: 'What is the daily schedule like during the yoga teacher training program?',
      content: 'Our yoga teacher training program in Rishikesh follows a rigorous schedule, with daily classes on yoga philosophy, asanas, pranayama, and meditation. We also provide ample time for self-study, practice teaching, and reflection.',
    },
    {
        title: 'What is the cost of the yoga teacher training program?',
        content: 'Our yoga teacher training program in Rishikesh is competitively priced, with no hidden costs. Please visit our website or contact us for more details.',
      },
      {
        title: 'What kind of food is served during the program?',
        content: 'We serve healthy and nutritious vegetarian meals that are prepared fresh daily. Our menu includes a variety of Indian and international dishes that cater to different dietary requirements.',
      },
  ];

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={item.title} className={`accordion-item ${active}`}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <span className="icon">{active === 'active' ? '-' : '+'}</span>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
   
     <div className="yogaschool">
        <div className="yogaa">
          <div className="heading">
     <h1>Frequently Asked Questions</h1>
            <img src="./images/lg.png" alt="logo" />
          </div>
        </div>
      </div>
      <div className="accordion-container">
     <h1>Questions  You May have Before Join Us</h1>
        {renderedItems}
      </div>
    </div>
  );
};

export default Accordion;
