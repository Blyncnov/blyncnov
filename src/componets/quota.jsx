import React from 'react'

// ________ Import Quote  Styles ______________
import { QuotesSectionContainer, QuoteSectionContainerInner } from "../styles/quota-style"

const Quotes = () => {
    return (
        <>
           <QuotesSectionContainer>
           <QuoteSectionContainerInner>
               <h4><cite>The <span>greatest</span> achievement is to be able to <span>translate</span> an idea into beautiful designs and <span>life product</span>, <br/>
           The world has enough coders, In order to be irreplaceable, one must always be <span>different</span></cite></h4>
           <br/>
           <cite>Taiwo Boluwatife Jeremiah <br/><strong style={{color: "#020771"}}>CEO blyncnov</strong></cite>
           </QuoteSectionContainerInner>
           </QuotesSectionContainer>
        </>
    )
}

export default Quotes