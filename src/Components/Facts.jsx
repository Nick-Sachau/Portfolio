import { GoCheck } from 'react-icons/go'
import { BsPeople, BsAward, BsLayoutTextWindowReverse } from 'react-icons/bs'
import data from '../Assets/Data.json'

const Facts = () => {

    return (
        <section id="facts">
            <div className="overlay-backround"></div>
            <div className="title">
                <h2>Facts</h2>
            </div>
            <div className="topics">
                <div className="completed">
                    <div className="icon">
                        <GoCheck></GoCheck>
                    </div>
                    <p className="number">{data.facts[0].completed}</p>
                    <p className="title">Projects Completed</p>
                </div>
                <div className="clients">
                    <div className="icon">
                        <BsPeople></BsPeople>
                    </div>
                    <p className="number">{data.facts[0].totalClients}</p>
                    <p className="title">Total Clients</p>
                </div>
                <div className="awards">
                    <div className="icon">
                        <BsAward></BsAward>
                    </div>
                    <p className="number">{data.facts[0].awardsWon}</p>
                    <p className="title">Awards Won</p>
                </div>
                <div className="experience">
                    <div className="icon">
                        <BsLayoutTextWindowReverse></BsLayoutTextWindowReverse>
                    </div>
                    <p className="number">{data.facts[0].experence}</p>
                    <p className="title">Years of Experience</p>
                </div>
            </div>
        </section>
    )
}

export default Facts
