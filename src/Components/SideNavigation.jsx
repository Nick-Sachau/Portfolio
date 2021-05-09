import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson, BsFileEarmark, BsEnvelope } from 'react-icons/bs'
import { BiBookContent, BiServer } from 'react-icons/bi'
import React, { useState } from 'react'

const SideNavigation = () => {
    const [isActiveHome, setIsActiveHome] = useState(true)
    const [isActiveAbout, setIsActiveAbout] = useState(false)
    const [isActiveResume, setIsActiveResume] = useState(false)
    const [isActivePortfolio, setIsActivePortfolio] = useState(false)
    const [isActiveServices, setIsActiveServices] = useState(false)
    const [isActiveContact, setIsActiveContact] = useState(false)

    const setActive = (clicked) => {
        if(clicked === 'home') {
            setIsActiveHome(true)
            setIsActiveAbout(false)
            setIsActiveContact(false)
            setIsActivePortfolio(false)
            setIsActiveResume(false)
            setIsActiveServices(false)
        }else if(clicked === 'about') {
            setIsActiveHome(false)
            setIsActiveAbout(true)
            setIsActiveContact(false)
            setIsActivePortfolio(false)
            setIsActiveResume(false)
            setIsActiveServices(false)
        }else if(clicked === 'resume') {
            setIsActiveHome(false)
            setIsActiveAbout(false)
            setIsActiveContact(false)
            setIsActivePortfolio(false)
            setIsActiveResume(true)
            setIsActiveServices(false)
        }else if(clicked === 'portfolio') {
            setIsActiveHome(false)
            setIsActiveAbout(false)
            setIsActiveContact(false)
            setIsActivePortfolio(true)
            setIsActiveResume(false)
            setIsActiveServices(false)
        }else if(clicked === 'services') {
            setIsActiveHome(false)
            setIsActiveAbout(false)
            setIsActiveContact(false)
            setIsActivePortfolio(false)
            setIsActiveResume(false)
            setIsActiveServices(true)
        }else if(clicked === 'contact') {
            setIsActiveHome(false)
            setIsActiveAbout(false)
            setIsActiveContact(true)
            setIsActivePortfolio(false)
            setIsActiveResume(false)
            setIsActiveServices(false)
        }
    }

    return (
        <nav className="sidenav">
            <ul>
                <li onClick={() => setActive('home')} className={isActiveHome ? "active" : null}><a href="#home">{ <AiOutlineHome></AiOutlineHome> } <span>Home</span></a></li>
                <li onClick={() => setActive('about')} className={isActiveAbout ? "active" : null}><a href="#about">{ <BsPerson></BsPerson> } <span>About</span></a></li>
                <li onClick={() => setActive('resume')} className={isActiveResume ? "active" : null}><a href="#resume">{ <BsFileEarmark></BsFileEarmark> } <span>Resume</span></a></li>
                <li onClick={() => setActive('portfolio')} className={isActivePortfolio ? "active" : null}><a href="#portfolio">{ <BiBookContent></BiBookContent> } <span>Portfolio</span></a></li>
                <li onClick={() => setActive('services')} className={isActiveServices ? "active" : null}><a href="#services">{ <BiServer></BiServer> } <span>Services</span></a></li>
                <li onClick={() => setActive('contact')} className={isActiveContact ? "active" : null}><a href="#contact">{ <BsEnvelope></BsEnvelope> } <span>Contact</span></a></li>
            </ul>
        </nav>
    )
}

export default SideNavigation
