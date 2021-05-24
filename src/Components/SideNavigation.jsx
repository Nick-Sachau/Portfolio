import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson, BsFileEarmark } from 'react-icons/bs'
import React, { useState } from 'react'

const SideNavigation = () => {
    const [isActiveHome, setIsActiveHome] = useState(true)
    const [isActiveAbout, setIsActiveAbout] = useState(false)
    const [isActiveResume, setIsActiveResume] = useState(false)

    const setActive = (clicked) => {
        setIsActiveHome(false)
        setIsActiveAbout(false)
        setIsActiveResume(false)

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
            default :
                break;
        }
    }

    return (
        <header>
            <nav className="sidenav">
                <ul>
                    <li onClick={() => setActive('home')} className={isActiveHome ? "active" : null}><a href="#home">{ <AiOutlineHome></AiOutlineHome> } <span>Home</span></a></li>
                    <li onClick={() => setActive('about')} className={isActiveAbout ? "active" : null}><a href="#about">{ <BsPerson></BsPerson> } <span>About</span></a></li>
                    <li onClick={() => setActive('resume')} className={isActiveResume ? "active" : null}><a href="#resume">{ <BsFileEarmark></BsFileEarmark> } <span>Resume</span></a></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default SideNavigation
