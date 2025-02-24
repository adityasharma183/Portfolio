import React from 'react'
import {BallCanvas} from "./canvas";
import { technologies } from '../constants';
import { div } from 'framer-motion/client';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((technology,)=>(
          <div className='w-[28] w-[28]' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "");