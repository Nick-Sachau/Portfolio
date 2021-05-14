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
        setIsActiveHome(false)
        setIsActiveAbout(false)
        setIsActiveContact(false)
        setIsActivePortfolio(false)
        setIsActiveResume(false)
        setIsActiveServices(false)

        switch (clicked) {
            case "home":
                setIsActiveHome(true)
                break;
            case "about":
                setIsActiveAbout(true)
                break;
            case "resume":
                setIsActiveResume(true)
                break;
            case "portfolio":
                setIsActivePortfolio(true)
                break;
            case "services":
                setIsActiveServices(true)
                break;
            case "contact":
                setIsActiveContact(true)
                break;
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
