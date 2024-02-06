import Header from "../Header/Header";
import "./Hero.css";

import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";

import CountUp from 'react-countup';


const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile= window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "150px" : "230px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span><CountUp start={80} end={140} prefix="+" delay={1}/></span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span><CountUp start={900} end={978} prefix="+" delay={1}/></span>
            <span>Memebers joined</span>
          </div>
          <div>
            <span><CountUp start={0} end={50} prefix="+" delay={1} /></span>
            <span>Fitness programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "5rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>115 bpm</span>
        </motion.div>

        <img src={hero_img} alt="" className="hero-img" />
        <motion.img
          initial={{ right: "13rem" }}
          whileInView={{ right: "24rem" }}
          transition={transition}
          src={hero_img_back}
          alt=""
          className="hero-img-back"
        />

        <motion.div
          initial={{ right: "36rem" }}
          whileInView={{ right: "30rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
