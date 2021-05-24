const Resume = () => {
    return (
        <section id="resume">
            <div className="title">
                <h2>Resume</h2>
                <p>
                    Quis aliquip quis esse elit culpa Lorem et cillum veniam qui. Tempor minim culpa proident ut eiusmod sit aliquip tempor. Magna sunt anim culpa cillum deserunt pariatur excepteur enim Lorem consequat officia pariatur nisi. Aliquip adipisicing excepteur ipsum ea dolore laboris commodo ad.
                </p>
            </div>
            <div className="row">
                <div className="left">
                    <h3>Sumary</h3>
                    <div className="resume-item">
                        <h4>Nick Sachau</h4>
                        <p className="content"><em>Amet laborum cupidatat consectetur amet ad proident. Occaecat Lorem culpa velit sint ullamco et adipisicing id elit quis exercitation cillum occaecat. Officia non cillum non minim anim laboris nisi irure ipsum reprehenderit enim. Sunt occaecat minim eu exercitation proident. Consequat nulla ad ex consequat elit esse fugiat. Magna id amet voluptate cillum mollit est nisi officia aliquip magna aliqua.</em></p>
                        <ul className="info">
                            <li>Glendale, Az</li>
                            <li>(123) 456-7891</li>
                            <li>Example@example.com</li>
                        </ul>
                    </div>
                    <h3>Education</h3>
                    <div className="resume-item">
                        <h4 className="degree">Degree 1</h4>
                        <p className="year">2022 - 2024</p>
                        <p className="school"><em>School 1, Phoenix, Az</em></p>
                        <p className="content">Non occaecat sit sit pariatur dolor duis laborum elit eiusmod. Minim commodo ex minim quis esse veniam eu cupidatat duis sunt aliqua commodo id sit. Non proident exercitation esse ex officia reprehenderit Lorem ad amet.</p>
                    </div>
                    <div className="resume-item">
                        <h4 className="degree">Degree 2</h4>
                        <p className="year">2022 - 2024</p>
                        <p className="school"><em>School 2, Peoria, Az</em></p>
                        <p className="content">Non occaecat sit sit pariatur dolor duis laborum elit eiusmod. Minim commodo ex minim quis esse veniam eu cupidatat duis sunt aliqua commodo id sit. Non proident exercitation esse ex officia reprehenderit Lorem ad amet.</p>
                    </div>
                </div>
                <div className="right">
                    <h3>Professional Experience</h3>
                    <div className="resume-item">
                        <h4 className="job">Amet enim consectetur</h4>
                        <p className="year">2020 - 2021</p>
                        <p className="location">Glendale, Az</p>
                        <ul>
                            <li className="work-task">Consequat sint aliqua laboris labore ipsum amet ea et eu anim id.</li>
                            <li className="work-task">Reprehenderit duis nulla cillum ad enim reprehenderit et ex ut.</li>
                            <li className="work-task">Qui deserunt sit ea eiusmod.</li>
                            <li className="work-task">Et fugiat laboris esse aliquip dolor officia magna esse anim nisi ipsum nisi sit.</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4 className="job">Proident aliqua aliqua</h4>
                        <p className="year">2021 - Present</p>
                        <p className="location">Tuscon, Az</p>
                        <ul>
                            <li className="work-task">Consequat sint aliqua laboris labore ipsum amet ea et eu anim id.</li>
                            <li className="work-task">Reprehenderit duis nulla cillum ad enim reprehenderit et ex ut.</li>
                            <li className="work-task">Qui deserunt sit ea eiusmod.</li>
                            <li className="work-task">Et fugiat laboris esse aliquip dolor officia magna esse anim nisi ipsum nisi sit.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Resume
