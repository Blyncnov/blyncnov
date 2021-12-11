import React, { useState } from 'react'

// ________ Import Icons For Navbar  ______________
import { FaBars, FaTimes } from "react-icons/fa"

// ________ Import Navbar-v1 Styles ______________
import {
    NavbarContainer,
    NavbarRow,
    Logo,
    NavbarListItems,
    Mobile
} from "../styles/navbar-style"

// ________ Import Navbar Data  ______________
import {
    // LogoName,
    NavbarDataInfo,

} from "../data/navbarData"

const Navbar = () => {
    const [clicked, isClicked] = useState(false)

    const onToggleHandler = () => {
        isClicked(!clicked)
    }
    return (
        <>
            <NavbarContainer>
                <NavbarRow>
                    <Logo  style={{cursor: 'pointer'}}> 
                        {/* <h1>{LogoName}</h1> */}
                        <img src="https://i.imgur.com/1qGvdoY.gif" alt="blyncnov" />
                    </Logo>
                    <NavbarListItems onClick={onToggleHandler} click={clicked}>
                        {NavbarDataInfo.map((lists) => {
                            return (
                                <li onClick={onToggleHandler} key={lists.id}>
                                {lists.name}
                            </li>
                            )
                        })}
                    </NavbarListItems>
                    <Mobile onClick={onToggleHandler}>
                        {clicked ? <FaTimes style={{cursor: 'pointer'}} /> : <FaBars  style={{cursor: 'pointer'}} />}
                    </Mobile>
                </NavbarRow>
            </NavbarContainer>
        </>
    )
}

export default Navbar
