import { motion } from "framer-motion";
import "./omnifood.css";
import image1 from "../src/assets/1/{10DA759C-00A3-42CA-BCDC-E574CDF79C51}.png.jpg";
import image2 from "../src/assets/1/{3C86E7F5-89BA-463A-B2CB-72872DEBFA5A}.png.jpg";
const Omnifood = () => {
  return (
    <motion.div
      style={{
        width: "100%",

        backgroundColor: "#ece7e1",
      }}
      initial={{
        translateY: "-100%",
      }}
      animate={{
        translateY: "0%",
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="nav--left">
        <div className="nav--left--item">
          <a className="nav--left--link" href="/work">
            WORK
          </a>
        </div>
        <div className="nav--line"></div>
        <div className="nav--left--item nav--copyright">
          <div className="copyright">©/2024</div>
        </div>
      </div>
      <div className="work--background">
        <h1>OMNIFOOD</h1>
      </div>
      <div className="small--wrapper">
        <div className="work--description">
          OminiFood is an innovative food management and delivery platform
          designed to showcase my skills in designing and developing
          user-centered solutions
        </div>
      </div>
      <div className="wrapper--table">
        <div className="table">
          <div>
            <h3>ROLE</h3>
            <p>Web Development</p>
          </div>
          <div>
            <h3>RESPONSIBILITIES</h3>
            <p>
              Webflow Setup, Image Saving & Optimisation, Webflow Development,
              Custom CSS, Animation, SEO, Launch
            </p>
          </div>
          <div>
            <h3>URL</h3>
            <a href="https://github.com/johnAyodele1/Omnifood/tree/master">
              https://github.com/....
            </a>
          </div>
        </div>
      </div>
      <div className="image1">
        <img src={image1} alt="Image Pics" />
      </div>
      <div className="text">
        Designed and developed a user-friendly interface for seamless food
        management and ordering food.
      </div>
      <div className="text1">
        I learned a lot about Web development while building this site. I love
        HTML and CSS and animation possibilities would normally be very limited
        without this skill. I had a lot of fun creating this website.
      </div>
      <div className="image1">
        <img src={image2} alt="Image Pics" />
      </div>
      <div className="content-footer">
        <blockquote className="call-to-action">Check it out.</blockquote>
        <a
          href="https://github.com/johnAyodele1/Omnifood/tree/master"
          target="_blank"
          className="button w-button"
        >
          http://github.com/...
        </a>
      </div>
    </motion.div>
  );
};

export default Omnifood;
