import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { Style } from "../Style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import pdf3 from "../assets/certtt.pdf"


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
     <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={Style.sectionSubText}>Introduction</p>
        <h2 className={Style.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I love learning new things and working closely with clients. My goal? Building smart, easy-to-use solutions that solve real problems. Let's team up and turn your ideas into awesome tech!
      </motion.p>

<div className="dis-flex">

<div className="btnnn1">
<a className="btn btn-outline-success my-2 my-sm-0" href={pdf3} target="_blank">Curriculum Vitae</a>

</div>

<div className="btnnn2">
<a className="btn btn-outline-success my-2 my-sm-0" href={pdf3} target="_blank">Certifications</a>

</div>

</div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");