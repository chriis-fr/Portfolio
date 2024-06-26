import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../style'
import {services} from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div 
       variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return(
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a full-stack Web2 and Web3 developer with expertise in JavaScript frameworks such as React.js, Node.js, and Express. I specialize in creating dynamic user interfaces and robust applications for both web and mobile platforms, utilizing SQL and NoSQL databases to meet your specific requirements
        <br/>
        Additionally, I develop blockchain smart contracts on the Internet Computer, and build decentralized applications (DApps) using Solana and Motoko integrations. 
        <br />
        My skill set also includes proficiency in the MERN stack and emerging technologies like Rust and ICP, ensuring innovative and comprehensive solutions for your digital needs.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} 
           {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")