import React from 'react'

import Navbar from './navbar'
import HeroSection from './hero-section'

import { HeaderSectionContainer, HeaderSectionEffect } from "../styles/header-style"

const HeaderSection = () => {
    return (
        <>
            <HeaderSectionContainer>
                <HeaderSectionEffect>
                    <Navbar />
                    <HeroSection />
                </HeaderSectionEffect>
            </HeaderSectionContainer>
        </>
    )
}

export default HeaderSection
