import React from "react";
import "./Home.scss";
import Topbar from "../../commonComponents/Topbar/Topbar";
import Play from "../../components/Play/Play";

// social Icons

import facebook from "../../assest/Home/facebook.svg";
import viber from "../../assest/Home/viber.svg";
import whatsapp from "../../assest/Home/whatsapp.svg";
import arrow from "../../assest/Home/arrow-icon.svg";
import phone from "../../assest/Home/phone.svg";
import location from "../../assest/Home/location.svg";

// Video
import video from "../../assest/Home/video.mp4";

// Images
import item from "../../assest/Home/item.png";
import hero from "../../assest/Home/hero.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <Topbar />
        <div className="home-hero">
          <img src={hero} alt="hero" />
        </div>
        <div className="home-container">
          <div className="home-container-content">
            <h1>Dubrovnik Taxi</h1>
            <h3>Driver</h3>
          </div>
          <div className="home-container-story">
            <h3>Story</h3>
            <div className="home-container-story-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-container-social">
            <h3>Social Media</h3>
            <div className="home-container-social-icon">
              <img src={facebook} alt="facebook" />
              <img src={whatsapp} alt="whats app" />
              <img src={viber} alt="viber" />
            </div>
          </div>
        </div>

        {/* Video Seciton */}
        <div className="home-video">
          <div className="home-video-container">
            <h3>Video</h3>
            <Play src={video} />
          </div>
        </div>

        <div className="home-container">
          <div className="home-container-links">
            <h3>Links</h3>
            <div className="home-container-links-item">
              <div className="home-container-links-item-image">
                <img src={item} alt="item" />
                <h4>Sasa</h4>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="home-container-contact">
            <div className="home-container-contact-item">
              <div className="home-container-contact-item-phone">
                <img src={phone} alt="phone" />
                <p>+385917526596</p>
              </div>
              <div className="home-container-contact-item-button">
                <button>Call</button>
              </div>
            </div>

            <div className="home-container-contact-item">
              <div className="home-container-contact-item-phone">
                <img src={location} alt="location" />
                <p>Bosnia & Herzegnovia</p>
              </div>
              <div className="home-container-contact-item-button">
                <button>Find</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
