"use client"

import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

import { ReactNode } from 'react';

function ScrollRevealSection({ children }: { children: ReactNode }) {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
    >
    {children}
    </motion.section>
  )
}

export default ScrollRevealSection