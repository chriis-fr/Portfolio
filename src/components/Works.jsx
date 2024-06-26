import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import { styles } from "../style"
import { github } from "../assets"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index, name, description, tags, image, source_code_link, website }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='flex flex-col bg-tertiary p-2 rounded-2xl items-center justify-center sm:w-[360px] w-full'>
        <div className="relative w-full h-[230px]">
          <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
            onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <br/>
        {website && <h4><div onClick={()=> window.open(website, "_blank")}>Click here to view webApp</div></h4>}
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div className="ml-10">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p 
      variants={fadeIn(", ", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I have worked on a variety of different projects and I'm always looking to learn new technologies! 
        
        <br/>
        Click on the github icon on every project card for the source code for each of my projects below
        <br/>
        
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7 p-3">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`}
        index={index}
        {...project}
        />
      ))}
    </div>
    </div>

  )
}

export default Works