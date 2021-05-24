import { AiOutlineRight } from 'react-icons/ai'

const About = () => {

    
    return (
        <section id="about">
            <div className="title">
                <h2>About</h2>
                <p>Enim sunt enim mollit exercitation voluptate incididunt consectetur irure proident Lorem ullamco fugiat sunt.Magna duis nisi quis sunt magna ad elit exercitation deserunt elit pariatur.Non incididunt eiusmod nulla ut eiusmod ipsum ea consectetur voluptate aute fugiat amet occaecat nostrud.</p>
            </div>
            <div className="row">
                <div className="left">
                    <img src="https://dummyimage.com/600x600/000000/fff&text=Placeholder" alt="placeholder" />
                </div>
                <div className="right">
                    <h3>UI/UX Designer & Web Developer.</h3>
                    <p>Incididunt occaecat deserunt mollit nisi velit nisi duis nostrud pariatur exercitation.Ex in et non enim culpa ullamco veniam id consequat fugiat ut id.</p>
                    <div className="container">
                        <div className="left">
                            <ul>
                                <li><AiOutlineRight></AiOutlineRight> Birthday: <span>3 March 2004</span></li>
                                <li><AiOutlineRight></AiOutlineRight> Phone: <span>602-677-3074</span></li>
                                <li><AiOutlineRight></AiOutlineRight> City: <span>Glendale</span></li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li><AiOutlineRight></AiOutlineRight> Age: <span>17</span></li>
                                <li><AiOutlineRight></AiOutlineRight> Degree: <span>N/A</span></li>
                                <li><AiOutlineRight></AiOutlineRight> Email: <span>Example@gmail.com</span></li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        Velit commodo ipsum id magna labore est aliqua ipsum. Sit amet occaecat esse qui ut. Ex excepteur nostrud magna excepteur elit qui. Ullamco anim voluptate Lorem officia in nisi eiusmod aliquip duis laborum deserunt. Excepteur est et sint aliquip sunt. Deserunt Lorem excepteur velit commodo nostrud exercitation exercitation elit adipisicing velit sint.

                        Occaecat non labore nulla culpa deserunt. Mollit magna magna culpa sit non cupidatat voluptate esse. Amet laborum sint excepteur ipsum est pariatur elit proident voluptate sunt aliqua cillum. Laboris est in nostrud non elit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
