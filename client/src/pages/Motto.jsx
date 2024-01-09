import React, { useRef, useState } from 'react'
import useMouse from '../util/useMouse';
import {motion} from 'framer-motion'

const Motto = () => {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 50;
  const section1Ref = useRef(null);
  const {x, y} = useMouse(section1Ref);

  return (
    <section id="section06" >
        <div class="motto__wrap" ref={section1Ref}>
            <h3 class="small">motto</h3>
            <motion.div 
              class="motto__mask"
              animate={{
                WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                WebkitMaskSize: `${size}px`
              }}
              transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
                <div
                onMouseEnter={() => {setIsHovered(true)}} 
                onMouseLeave={() => {setIsHovered(false)}}
                >
                  <div>나는 흐름을 주도하는 풀스택 령정 개발자입니다. </div>
                  <div>모든 열정과 결정에 다 같이 지식과 열정을 바칩니다. </div>
                  <div>혁신적이고 사용자 중심적인 소프트웨어 제작합니다. </div>
                </div>
            </motion.div>
            <div class="motto__text">
                <div>I am a <i class="green">full-stack developer</i> driven by </div>
                <div>knowledge and passion, dedicated to </div>
                <div>crafting innovative & user-centric software </div>
            </div>
        </div>
    </section>
  )
}

export default Motto