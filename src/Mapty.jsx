import { motion } from "framer-motion";
import "./omnifood.css";

const Mapty = () => {
  return (
    <motion.div
      style={{
        width: "100%",

        backgroundColor: "#ece7e1",
      }}
      initial={{
        translateY: "-200%",
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
        <h1>MAPTY</h1>
      </div>
      <div className="small--wrapper">
        <div className="work--description">
          Mapty is fitness tracking website designed and developed to enable
          users to log workouts by clicking on the map to record location-based
          activites
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
            <a href="https://www.mapty-johnayodele.com">
              https://www.mapty-johnayodele.com
            </a>
          </div>
        </div>
      </div>
      <div className="image1"></div>
      <div className="text">
        Track various exercise types, including cycling, running, and elevation
        gain and display workouts completed by dates
      </div>
      <div className="text1">
        This project demonstrates my ability to design and develop interactive,
        user-centered web applications that cater to specific needs and goals
      </div>
      <div className="image2"></div>
      <div className="content-footer">
        <blockquote className="call-to-action">Check it out.</blockquote>
        <a href="http://okalpha.co" target="_blank" className="button w-button">
          https://www.mapty-johnayodele.com
        </a>
      </div>
    </motion.div>
  );
};

export default Mapty;
