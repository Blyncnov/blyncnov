import React from 'react'

import { FooterContainer , FooterRowContainer} from '../styles/footer-styles'

const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <FooterRowContainer>
                    <hr style={{margin: ".6em"}}/>
                    <h5>Copyright @2021 blyncnov</h5>
                    
                    <h6 style={{margin: "1em 0", fontFamily: "monospace"}}>Powered by <a style={{color: "#0283F2"}} href="https://blyncnov.com">blyncnov</a></h6>
                </FooterRowContainer>
            </FooterContainer>
        </div>
    )
}

export default Footer
