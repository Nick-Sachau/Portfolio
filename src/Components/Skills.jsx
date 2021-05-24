import data from '../Assets/Data.json'

const Skills = () => {
    return (
        <section id="skills">
            <div className="title">
                <h3>Skills</h3>
                <p>Est minim aute quis culpa enim qui voluptate. Cillum veniam cillum magna velit anim dolore nostrud incididunt dolore laborum mollit. Ipsum anim Lorem in veniam adipisicing nostrud velit in minim sunt. Do officia dolore eiusmod culpa in veniam ut in commodo aute proident sit.</p>
            </div>
            <div className="progressBars">
                <div className="left">
                    <div className="container">
                        <div className="labels">
                            <p className="title">HTML</p>
                            <p className="percentage">{data.skills[0].html}%</p>
                        </div>
                        <div className="bar">
                            <div className="html progress"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="labels">
                            <p className="title">CSS</p>
                            <p className="percentage">{data.skills[0].css}%</p>
                        </div>
                        <div className="bar">
                            <div className="css progress"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="labels">
                            <p className="title">JavaScript</p>
                            <p className="percentage">{data.skills[0].js}%</p>
                        </div>
                        <div className="bar">
                            <div className="js progress"></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="container">
                        <div className="labels">
                            <p className="title">React</p>
                            <p className="percentage">{data.skills[0].react}%</p>
                        </div>
                        <div className="bar">
                            <div className="react progress"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="labels">
                            <p className="title">BootStrap</p>
                            <p className="percentage">{data.skills[0].bootstrap}%</p>
                        </div>
                        <div className="bar">
                            <div className="bootstrap progress"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="labels">
                            <p className="title">Photoshop</p>
                            <p className="percentage">{data.skills[0].photoshop}%</p>
                        </div>
                        <div className="bar">
                            <div className="photoshop progress"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
