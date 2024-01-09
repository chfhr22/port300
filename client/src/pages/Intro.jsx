import React, { useRef, useState } from 'react'
import useMouse from '../util/useMouse';
import {motion} from 'framer-motion'

// import {introBg} from '../assets/script/js/introBg'

const Intro = () => {
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 400 : 50;
    const section2Ref = useRef(null);
    const {x, y} = useMouse(section2Ref);


  return (
    <section id="section01" ref={section2Ref}>
        <div class="intro__wrap">
            <motion.div 
                class="intro__mask"
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
                    <div class="small">kwon Green</div>
                    <div>창의적인</div>
                    <div>웹</div>
                    <div>디벨로퍼포트폴리오</div>
                    <div>2024</div>
                </div>
            </motion.div>
            <div class="intro__text">
                <div class="small">kwon Green</div>
                <div>creative</div>
                <div>web</div>
                <div><i class="green">developoer</i></div>
                <div>2024</div>
            </div>
        </div>
        <div class="about__img__wrap">
            <div class="about__img__mask">
                <div class="about__img__mask"></div>
                <div class="about__img__mask"></div>
                <div class="about__img__mask"></div>
            </div>
            <div class="about__img">
                <div class="img"></div>
                <div class="img"></div>
                <div class="img"></div>
            </div>
        </div>
    </section>
  )
}

export default Intro