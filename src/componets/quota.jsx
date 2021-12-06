import React from 'react'

// ________ Import Quote  Styles ______________
import { QuotesSectionContainer, QuoteSectionContainerInner } from "../styles/quota-style"

const Quotes = () => {
    return (
        <>
           <QuotesSectionContainer>
           <QuoteSectionContainerInner>
               <h4><cite>The greatest achievement is to be able to translate an idea into beautiful designs and life product, <br/>
           The world has enough coders, In order to be irreplaceable, one must always be different</cite></h4>
           <br/>
           <cite>Taiwo Boluwatife Jeremiah <br/><strong>CEO blyncnov</strong></cite>
           </QuoteSectionContainerInner>
           </QuotesSectionContainer>
        </>
    )
}

export default Quotes