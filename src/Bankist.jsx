import { motion } from "framer-motion";
import "./omnifood.css";

const Bankist = () => {
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
        <h1>BANKIST</h1>
      </div>
      <div className="small--wrapper">
        <div className="work--description">
          Bankist is a clean and modern landing page for a banking institution,
          focusing on simplicity and user experience.
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
      <div
        className="image1"
        style={{
          background:
            "url(./src/assets/2/{1BEC929C-FAF5-45B9-B553-55F0A137244A}.png.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text">
        The page aims to promote the bank's services, encouraging visitors to
        sign up with prominent call-to-action (CTA) buttons to drive coversions.
      </div>
      <div className="text1">
        This project showcases my ability to design intuitive and effective
        landing pages that drives results by creating a visually appealing and
        easy-to-navigate interface.
      </div>
      <div
        className="image2"
        style={{
          background:
            "url(src/assets/2/{3432415B-8978-46AB-BFA6-FEF67E464EC2}.png.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text">
        Minimalistic design with ample whitespace for clear messaging and
        concise and compelling content highlighting the bank's benefits.
      </div>
      <div className="text1">
        Effectively communicated the bank's value proposition with seamless
        viewing for visitors
      </div>
      <div
        className="image1"
        style={{
          background:
            "url(./src/assets/2/{08586363-7D0F-4B34-90A4-671B5AC1ADDE}.png.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="content-footer">
        <blockquote className="call-to-action">Check it out.</blockquote>
        <a href="http://okalpha.co" target="_blank" className="button w-button">
          https://www.mapty-johnayodele.com
        </a>
      </div>
    </motion.div>
  );
};

export default Bankist;
