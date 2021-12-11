import React from 'react'

import {
    PortfolioSectionContainer,
    PortfolioRow,
    PortfolioColumn,
    PortfolioImage,
    Textwrap
} from "../styles/portfolio-style"

import PortfolioData from "../data/portfolioData"

const PortfolioSection = () => {
    return (
        <>
            <PortfolioSectionContainer id="Portfolio">
                <h1 style={{color: "#020771"}}>MY PORTFOLIO</h1>
                <p>
                    We pride ourselves on transforming your website into something you can be proud of 👇
                </p>
                <br/>
                <PortfolioRow>
                    {PortfolioData.map(portfolio => {
                        return (
                            <div >
                                <PortfolioColumn>
                                    <a href={portfolio.link}>
                                        <PortfolioImage>
                                            <img src={portfolio.image} alt={portfolio.link} />
                                        </PortfolioImage>
                                    </a>
                                    <Textwrap>
                                        <h4>{portfolio.name}</h4>

                                    </Textwrap>
                                </PortfolioColumn>
                            </div>
                        )
                    })}
                </PortfolioRow>
            </PortfolioSectionContainer>

        </>
    )
}

export default PortfolioSection
