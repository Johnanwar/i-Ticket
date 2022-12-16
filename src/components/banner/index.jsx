import React from 'react';
import Header from '../layout/header';
import icon from '../../assets/images/icons/home-icon.svg';

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-container-content">
        <Header />
        <div className="banner-container-text d-flex justify-content-center align-items-center flex-column m-auto text-center">
          <p>
            Let’s find your event!
          </p>
          <h5 className="text-white">
            Best Place to Find Events You Love.
          </h5>
          <div className="d-flex justify-content-end w-100 px-4">
            <img src={icon} alt="" className="px-5" />
          </div>
          <span className="text-grey-light mt-2">

            iticket is a platform that helps you find events near you, because we know it’s hard to find. Find yours now!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
