import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson, BsFileEarmark, BsEnvelope } from 'react-icons/bs'
import { BiBookContent, BiServer } from 'react-icons/bi'
import React, { useState } from 'react'

const SideNavigation = () => {

    return (
        <nav className="sidenav">
            <ul>
                <li><a href="#home">{ <AiOutlineHome></AiOutlineHome> } <span>Home</span></a></li>
                <li><a href="#about">{ <BsPerson></BsPerson> } <span>About</span></a></li>
                <li><a href="#resume">{ <BsFileEarmark></BsFileEarmark> } <span>Resume</span></a></li>
                <li><a href="#portfolio">{ <BiBookContent></BiBookContent> } <span>Portfolio</span></a></li>
                <li><a href="#services">{ <BiServer></BiServer> } <span>Services</span></a></li>
                <li><a href="#contact">{ <BsEnvelope></BsEnvelope> } <span>Contact</span></a></li>
            </ul>
        </nav>
    )
}

export default SideNavigation
