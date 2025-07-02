import React, { useState } from 'react';
import Banner from '../Components/Banner';
import TopRecipes from '../Components/TopRecipes';
import CookingIsArt from '../Components/CookingIsArt ';
import HowItWorks from '../Components/HowItWorks';
import Footer from '../Components/Footer';
import Stats from '../Components/Stats';
import Slider from '../Components/Slider';


const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const themeStyles = {
    backgroundColor: isDark ? '#111827' : '#f9fafb', 
    color: isDark ? '#ffffff' : '#000000',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: isDark ? '#374151' : '#e5e7eb', 
    color: isDark ? '#ffffff' : '#000000',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    cursor: 'pointer',
  };

  return (
    <div style={themeStyles}>
     
      <div className="flex justify-end p-4">
        <button style={buttonStyle} onClick={() => setIsDark(!isDark)}>
          {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      
      <Banner isDark={isDark} />
      <TopRecipes isDark={isDark} />
      <Slider></Slider>
      <CookingIsArt></CookingIsArt>
      <HowItWorks></HowItWorks>
      <Stats></Stats>
      <Footer></Footer>
      
      
    </div>
  );
};

export default Home;
