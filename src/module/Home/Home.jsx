import React, { useEffect } from "react";
import "./Home.scss";
import Topbar from "../../commonComponents/Topbar/Topbar";
import Play from "../../components/Play/Play";
import facebook from "../../assest/Home/facebook.svg";
import viber from "../../assest/Home/viber.svg";
import whatsapp from "../../assest/Home/whatsapp.svg";
import arrow from "../../assest/Home/arrow-icon.svg";
import phone from "../../assest/Home/phone.svg";
import location from "../../assest/Home/location.svg";
import video from "../../assest/Home/video.mp4";
import item from "../../assest/Home/item.png";
import hero from "../../assest/Home/hero.png";
import logo from "../../assest/logo.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllInfo } from "./../../store/action";

const Home = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.infoReducer);

  useEffect(() => {
    if (id) {
      const result = { id: "63c83bfe2cf069d756e94496" };
      dispatch(getAllInfo(result));
    }
  }, []);

  return (
    <>
      {/* <h1>Hi My Name Is Kham</h1> */}
      <div className="home">
        <Topbar info={info} />
        <div className="home-hero">
          <img src={info?.coverImage ? info.coverImage : ""} alt="hero" />
        </div>
        <div className="home-logo">
          <img src={logo} alt="" />
        </div>
        <div className="home-container">
          <div className="home-container-content">
            <h1>{info?.firstName ? info.firstName : ""}</h1>
            <h3>{info?.lastName ? info.lastName : ""}</h3>
          </div>
          <div className="home-container-story">
            <h3>Story</h3>
            <div className="home-container-story-para">
              <p>{info?.story ? info.story : ""}</p>
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
            {info?.videos?.map((data, key) => {
              // console.log("data is", data);
              return <Play src={data} key={key} />;
            })}
          </div>
        </div>

        <div className="home-container">
          {info?.links?.length > 0
            ? info?.links?.map((data, key) => {
                return (
                  <div className="home-container-links" key={key}>
                    <h3>{data.name}</h3>
                    <div className="home-container-links-item">
                      <div className="home-container-links-item-image">
                        <a href={data.link}>
                          <img src={data.photoPath} alt="item" />
                        </a>
                        <h4>Sasa</h4>
                      </div>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                );
              })
            : ""}

          {/* Contact Section */}
          <div className="home-container-contact">
            <div className="home-container-contact-item">
              <div className="home-container-contact-item-phone">
                <img src={phone} alt="phone" />
                <p>
                  {info?.contactInfo?.phoneNumber
                    ? info.contactInfo.phoneNumber
                    : ""}
                </p>
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
