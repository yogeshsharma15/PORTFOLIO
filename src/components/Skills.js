import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div 
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.1 }}  // Increased scale slightly for more emphasis
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ type: 'spring', duration: 1 }}  // Slightly faster animation
    >
      {name}
    </motion.div>
  )
}

export const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        
        {/* Center Skill */}
        <motion.div 
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.1 }}  // Increased scale slightly
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}  // Faster hover transition
        >
          Web
        </motion.div>

        {/* Other Skills */}
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="10vw" y="5vw" />
        <Skill name="JavaScript" x="-15vw" y="15vw" />
        <Skill name="React" x="20vw" y="-5vw" />
        <Skill name="Node.js" x="-10vw" y="-20vw" />
        <Skill name="MongoDB" x="15vw" y="10vw" />
        <Skill name="Java" x="25vw" y="0vw" />
        <Skill name="MySQL" x="-25vw" y="5vw" />
        <Skill name="Python" x="0vw" y="20vw" />
        <Skill name="Artificial Intelligence" x="-20vw" y="-15vw" />
        <Skill name="Machine Learning" x="20vw" y="15vw" />
        
      </div>
    </>
  )
}

export default Skills
