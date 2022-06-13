import React from 'react';
 
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper  secton__padding ' id='chef'>
    <div className="app__wrapper_img app__wraper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="chef's word" />
      <h1 className="headtext__cormorant">What We Belive In </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        </div>
        <p className="p__opensans">Eum harum error officiis ipsa incidunt at blanditiis debitis asperiores accusamus qui, modi sapiente ratione deserunt unde porro sed consequatur. Odio, ducimus!</p>
      </div>
      <div className="app__chef-sign">
        <p>Raju raja</p>
        <p className="p__opensans">Master Chef</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
