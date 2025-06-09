import React, { useState, useRef } from 'react';
import './Blog.css';
import ractangle from '../../images/Blog/Rectangle_1.webp'
import health from '../../images/Blog/health.webp'
import living from '../../images/Blog/living.webp'
import food from '../../images/Blog/food.webp'

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null); // Add ref to target the section

  const cardData = [
    {
      id: 1,
      image: ractangle,
      title: 'Most Challenging Yoga Poses',
      description: 'Discover the hardest yoga poses to push your limits. Includes step-by-step guides, benefits, and a quiz to test your knowledge.',
    },
    {
      id: 2,
      image: health,
      title: 'Detox Drinks to Increase Immunity, Recipes',
      description: 'Immunity boosting We are facing the times when fear caused by coronavirus is coming from everywhere around.',
    },
    {
      id: 3,
      image: living,
      title: 'From Exercise to Conscious Living',
      description: 'From Exercise to Conscious Living: One Yogini\'s Journey – by Shannon Towle',
    },
    {
      id: 4,
      image: food,
      title: 'Yogic Food',
      description: "House of Om Yoga School's Approach towards a yogic diet is simple",
    },
    // {
    //   id: 5,
    //   image: 'https://images.unsplash.com/photo-1506629905607-f5b8b816b4cd?w=600&h=400&fit=crop',
    //   title: 'Healthy Nutrition Guide',
    //   description: 'Comprehensive guide to healthy eating with meal plans, nutritional tips, and delicious recipes for optimal wellness.',
    // },
    // {
    //   id: 6,
    //   image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    //   title: 'Mind-Body Connection',
    //   description: 'Explore the powerful relationship between mental and physical health through holistic wellness practices.',
    // }
  ];

  const visibleCards = showAll ? cardData : cardData.slice(0, 3);

  // Function to handle showing more blog posts
  const handleShowMore = () => {
    setShowAll(true);
  };

  // Function to handle showing less blog posts with scroll
  const handleShowLess = () => {
    setShowAll(false);
    // Scroll to the top of the section after a short delay to let the DOM update
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  return (
    <div className="main-container" ref={sectionRef}>
       <div className="yogaschool">
            <div className="yogaa">
              <div className="heading">
                <h1>Blog</h1>
                <img src="./images/lg.png" alt="logo" />
              </div>
            </div>
          </div>
      <div className="card-container">
        <div className="cards-grid">
          {visibleCards.map((card, index) => (
            <div key={card.id} className={`card ${showAll && index >= 3 ? 'fade-in' : ''}`}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
                <div className="card-overlay"></div>
                <div className="card-content-overlay">
                  <h3 className="blog-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="show-more-container">
          {!showAll ? (
            <button 
              className="show-more-btn"
              onClick={handleShowMore}
            >
              SHOW MORE
            </button>
          ) : (
            <button 
              className="show-more-btn"
              onClick={handleShowLess}
            >
              SHOW LESS
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;