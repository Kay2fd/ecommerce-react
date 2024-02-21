import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center' id='about'>
    {/* <div className='app__aboutus-overlay flex__center'> */}
      {/* <img src={images.G} alt='g letter'/> */}
    {/* </div> */}
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>From exquisite culinary creations to impeccable service, this subheading encapsulates the essence of an indulgent journey through the culinary arts. Discover the harmony of flavors, the artistry of presentation, and the sophistication of ambiance, as this key opens the door to a realm where each meal becomes a symphony of taste and refinement.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about knife' />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>From exquisite culinary creations to impeccable service, this subheading encapsulates the essence of an indulgent journey through the culinary arts. Discover the harmony of flavors, the artistry of presentation, and the sophistication of ambiance, as this key opens the door to a realm where each meal becomes a symphony of taste and refinement.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
