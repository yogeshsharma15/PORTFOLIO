import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"

// Circle component that appears on the timeline
const Circle = ({ scrollYProgress }) => {
  return (
    <motion.div
      style={{ scaleY: scrollYProgress }}
      className='absolute left-[-30px] top-0 w-8 h-8 rounded-full bg-light border-4 border-dark origin-center'
    />
  );
};

const Details = ({ degree, institution, institutionLink, time, address, description, scrollYProgress }) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between relative'>
      {/* The circle for each institution */}
      <Circle scrollYProgress={scrollYProgress} />
      <div className='ml-12'>
        <h3 className='capitalize font-bold text-2xl'>
          {degree}&nbsp;
          <a href={institutionLink} target='_blank' className='text-primary capitalize'>
            @{institution}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
          {description}
        </p>
      </div>
    </li>
  );
};

export const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>

        {/* Scroll line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />

        {/* Education list with circles */}
        <ul className='w-full flex flex-col items-start justify-between ml-4 relative'>
          <Details
            degree="B.Tech in Computer Science and Engineering"
            institution="CMR College Of Engineering And Technology"
            institutionLink="https://cmrcet.ac.in"
            time="2021 - 2025"
            address="KandlaKoya, Medchal, Hyderabad"
            description="Specialization in Artificial Intelligence & Machine Learning. Focused on full-stack web development (MERN stack) and AI-driven solutions."
            scrollYProgress={scrollYProgress} // Pass the scroll progress to Details
          />
          <Details
            degree="12th"
            institution="The Secunderabad Public School"
            institutionLink="https://www.abcschool.com"
            time="2020 - 2021"
            address="West Marredpally, Secunderabad"
            description="Focused on science stream with major subjects in Mathematics, Physics, and Chemistry."
            scrollYProgress={scrollYProgress} // Pass the scroll progress to Details
          />
          <Details
            degree="10th"
            institution="The Secunderabad Public School"
            institutionLink="https://www.abcschool.com"
            time="2018 - 2019"
            address="West Marredpally, Secunderabad"
            description="Completed secondary education with strong foundations in core science subjects."
            scrollYProgress={scrollYProgress} // Pass the scroll progress to Details
          />
        </ul>
      </div>
    </div>
  )
}

export default Education;
