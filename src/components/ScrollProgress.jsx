import React from 'react'
import { motion, useScroll } from 'motion/react'

function ScrollProgress() {
    const {scrollYProgress} = useScroll()
  return (
    <>
    <motion.div style={{
        scale: scrollYProgress,
        height: 10,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        originX: 0,
        backgroundColor: '#F46C38',
    }}>
    </motion.div>
    </>
  )
}

export default ScrollProgress