import React from 'react'

import { motion } from 'framer-motion'


import {
    GridItemContainer,
    GridItemRow,
    GridItemWrap,
    GridItemColumn
} from '../styles/services-style'

import ServiceData from '../data/serviceData'

const ServiceSection = () => {
    return (
        <>
        <div id="Service">
            <GridItemContainer>
                <GridItemRow>
                    <h1 style={{ textAlign: "center", marginTop: "1em", color: "#020771" }}>WE'RE AWESOME AT 🙅‍♂️</h1>
                    <p style={{ textAlign: "center", color: "#343F4A" }}>Make the right hires, faster with the
                        world's leading recruiting software</p>
                    <GridItemWrap>
                        {ServiceData.map((data) => {
                            return (
                                <GridItemColumn key={data.id}>
                                    <div >
                                        <div style={{ fontSize: "2em" }}>
                                            {data.icon}
                                        </div>
                                        <motion.h1
                                            initial={{ opacity: 0, y: -40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: .1, duration: 1 }}>{data.title}</motion.h1>
                                        <motion.p
                                            initial={{ opacity: 0, x: -40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: .2, duration: 1 }}>{data.desc}</motion.p>
                                        <motion.button
                                            initial={{ opacity: 0, x: 40 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: .4, duration: 1.5 }}>
                                            <a href="/">{data.button}</a>
                                        </motion.button>
                                    </div>
                                </GridItemColumn>
                            )
                        })}
                    </GridItemWrap>
                </GridItemRow>
            </GridItemContainer>
             </div>
        </>
       
    )
}

export default ServiceSection;
