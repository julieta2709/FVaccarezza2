import { motion } from "framer-motion";
import React from "react";
import FrogAnima2 from "../../../assets/img/Frog/FrogAnima2.png";
import FrogAnima3 from "../../../assets/img/Frog/FrogAnima3.png";
import Frogcel3 from "../../../assets/img/Frog/Frogcel3.png";
import "../../../styles/Frog.css";

const FrogAnimation = () => {
    return (
<div>
    <img src={Frogcel3} alt="Frogcel3" className="image-animation" />
    <motion.img 
    src={FrogAnima2}
    alt="FrogAnima2"
    className="image-animation"
    initial={{
        opacity: 0,
        y:"-100%"
    }}
    animate={{
        opacity:1,
        y:0,
    }}
    transition={{
        duration:1.5,
        ease:"easeInOut",
    }}
    />
    <motion.img 
    src={FrogAnima3}
    alt="FrogAnima3"
    className="image-animation"
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity:1,
    }}
    transition={{
        duration:0.5,
        ease:"easeOut",
        delay: 1.5,
    }}
    />

</div>
    )
}
export default FrogAnimation;