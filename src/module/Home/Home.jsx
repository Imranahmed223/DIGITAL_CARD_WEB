import React, { useEffect } from "react";
import "./Home.scss";
import Topbar from "../../commonComponents/Topbar/Topbar";
import Play from "../../components/Play/Play";
import facebook from "../../assest/Home/facebook.svg";
import viber from "../../assest/Home/viber.svg";
import whatsapp from "../../assest/Home/whatsapp.svg";
import dribble from "../../assest/Icons/circle.png";
// import viber from "../../assest/Icons/viber.png";
// import viber from "../../assest/Icons/viber.png";
import tripadvisor from "../../assest/Icons/tripadvisor.png";
import instagram from "../../assest/Icons/insta.png";
import linkedin from "../../assest/Icons/linkedin.png";
import patreon from "../../assest/Icons/orange.png";
import skype from "../../assest/Icons/skype.png";
import snapchat from "../../assest/Icons/snapchat.png";
import telegram from "../../assest/Icons/telegram.png";
import twitter from "../../assest/Icons/twitter.png";
import vimeo from "../../assest/Icons/vipe.png";
import youtube from "../../assest/Icons/youtube.png";
import tiktok from "../../assest/Icons/tiktok.png";
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
          <img
            crossOrigin="true"
            src={info?.coverImage ? info.coverImage : ""}
            alt="hero"
          />
        </div>
        <div className="home-logo">
          <img crossOrigin="true" src={logo} alt="" />
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
              {info?.socialLinks?.facebook != null ? (
                <a href={info?.socialLinks?.facebook}>
                  <img crossOrigin="true" src={facebook} alt="facebook" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.instagram != null ? (
                <a href={info?.socialLinks?.instagram}>
                  <img crossOrigin="true" src={instagram} alt="instagram" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.linkedin != null ? (
                <a href={info?.socialLinks?.linkedin}>
                  <img crossOrigin="true" src={linkedin} alt="linkedin" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.twitter != null ? (
                <a href={info?.socialLinks?.twitter}>
                  <img crossOrigin="true" src={twitter} alt="twitter" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.youtube != null ? (
                <a href={info?.socialLinks?.youtube}>
                  <img crossOrigin="true" src={youtube} alt="youtube" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.tiktok != null ? (
                <a href={info?.socialLinks?.tiktok}>
                  <img crossOrigin="true" src={tiktok} alt="tiktok" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.whatsapp != null ? (
                <a href={info?.socialLinks?.whatsapp}>
                  <img crossOrigin="true" src={whatsapp} alt="whatsapp" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.snapchat != null ? (
                <a href={info?.socialLinks?.snapchat}>
                  <img crossOrigin="true" src={snapchat} alt="snapchat" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.telegram != null ? (
                <a href={info?.socialLinks?.telegram}>
                  <img crossOrigin="true" src={telegram} alt="telegram" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.vimeo != null ? (
                <a href={info?.socialLinks?.vimeo}>
                  <img crossOrigin="true" src={vimeo} alt="vimeo" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.patreon != null ? (
                <a href={info?.socialLinks?.patreon}>
                  <img crossOrigin="true" src={patreon} alt="vimeo" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.viber != null ? (
                <a href={info?.socialLinks?.viber}>
                  <img crossOrigin="true" src={viber} alt="viber" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.tripadvisor != null ? (
                <a href={info?.socialLinks?.tripadvisor}>
                  <img crossOrigin="true" src={tripadvisor} alt="tripadvisor" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.dribble != null ? (
                <a href={info?.socialLinks?.dribble}>
                  <img crossOrigin="true" src={dribble} alt="dribble" />
                </a>
              ) : (
                ""
              )}
              {info?.socialLinks?.skype != null ? (
                <a href={info?.socialLinks?.skype}>
                  <img crossOrigin="true" src={skype} alt="skype" />
                </a>
              ) : (
                ""
              )}
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
                          <img
                            crossOrigin="true"
                            src={data.photoPath}
                            alt="item"
                          />
                        </a>
                        <h4>Sasa</h4>
                      </div>
                      <img crossOrigin="true" src={arrow} alt="arrow" />
                    </div>
                  </div>
                );
              })
            : ""}

          {/* Contact Section */}
          <div className="home-container-contact">
            <div className="home-container-contact-item">
              <div className="home-container-contact-item-phone">
                <img crossOrigin="true" src={phone} alt="phone" />
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
                <img crossOrigin="true" src={location} alt="location" />
                {/* <p>Bosnia & Herzegnovia</p> */}
                <p>
                  <span>{info?.contactInfo?.location?.latitude}</span>{" "}
                  <span>{info?.contactInfo?.location?.longitude}</span>
                </p>
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
