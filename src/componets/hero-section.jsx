import React from 'react'
import { motion } from 'framer-motion'

// ________ Import Navbar-v1 Styles ______________
import {
    HeroSectionContainer,
    HeroSectionRow,
    HeroSectionColumn
} from "../styles/hero-style"


// ________ Import Navbar Data  ______________
import { HeroSectionInfo } from "../data/heroSectionData"

const ImageAminateContinous = {
    move: {
        y: [-25, 25, -25, 25],
        transition: {
            yoyo: Infinity,
        }
    },

    slow: {
        delay: .5,
        duration: 10
    }
}

const HeroSection = () => {
    return (
        <>
            <HeroSectionContainer>
                <HeroSectionRow row={HeroSectionInfo.direction} >
                    <HeroSectionColumn>
                        <motion.h1
                            initial={{ y: -250, opacity: 0 }}
                            animate={{ y: -10, opacity: 1 }}
                            transition={{ duration: 2 }}
                        >{HeroSectionInfo.title}
                            <cite> In order to be <span>irreplaceable</span>, one must always be <span>different</span> 👨‍🎤</cite>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: 2 }}
                            transition={{ duration: 2 }}
                        >{HeroSectionInfo.desc}</motion.p>
                        <motion.button
                            initial={{ x: `-100vw ` }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.1, duration: 2 }}>
                            <a href="/">{HeroSectionInfo.button}</a>
                        </motion.button>
                    </HeroSectionColumn>
                    <HeroSectionColumn align={false}>
                        <motion.img
                            initial={{ y: 0 }}
                            variants={ImageAminateContinous}
                            animate="move"
                            transition="slow"
                            src={HeroSectionInfo.url} alt="banner" />
                    </HeroSectionColumn>
                </HeroSectionRow>
            </HeroSectionContainer>
        </>
    )
}

export default HeroSection
