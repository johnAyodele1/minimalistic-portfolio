import { motion } from "framer-motion";
import "./omnifood.css";
import image8 from "../src/assets/3/{2660CF9C-B50D-449B-B37C-1E4CB2A0F4D0}.png.jpg";
import image9 from "../src/assets/3/{31D266E2-CDA3-4141-877E-83A5EF05ADE9}.png.jpg";
const Forkify = () => {
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
        <h1>FORKIFY</h1>
      </div>
      <div className="small--wrapper">
        <div className="work--description">
          Forkify is a recipe search and discovery web application that allows
          users to find and save their favorite recipes, filter search results
          by cooking time, servings, and dietary restrictions.
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
            <a href="https://github.com/johnAyodele1/forkify/tree/master">
              https://github.com/...
            </a>
          </div>
        </div>
      </div>
      <div className="image1">
        <img src={image8} alt="Image Pics" />
      </div>
      <div className="text">
        Search for recipes by ingredient, dish, or cuisine and view detailed
        recipe instructions and ingredients, save and organize favorite recipes
        in a personalized cookbook.Responsive design for seamless user
        experience across devices
      </div>
      <div className="text1">
        Forkify demonstrates my skills in front-end development, API
        integration, and user experience design. I'm proud of the features and
        functionality I've implemented, and I'm excited to continue improving
        and expanding the application.
      </div>
      <div className="image1">
        <img src={image9} alt="Image Pics" />
      </div>
      <div className="content-footer">
        <blockquote className="call-to-action">Check it out.</blockquote>
        <a
          href="https://github.com/johnAyodele1/forkify/tree/master"
          target="_blank"
          className="button w-button"
        >
          https://www.github.com/...
        </a>
      </div>
    </motion.div>
  );
};

export default Forkify;
