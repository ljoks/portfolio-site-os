import React from 'react';
import me from '../../assets/pictures/LJ.png';
import riverplate from '../../assets/pictures/river plate.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Lawrence (LJ) Oks</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm passionate about innovation and get a thrill from solving 
                    problems. With a strong foundation in computer science and 
                    experience in applying cutting-edge technologies to sectors
                    that are ripe for disruption - I'm currently focused on pushing
                    the boundaries of the energy industry at NextEra Energy as part 
                    of their Leadership Development Rotational Program.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it! If you ever want to
                    talk, feel free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:ljoks0727@gmail.com">
                        ljoks0727@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>What Drives Me</h3>
                <br />
                <p>
                    I'm currently at the forefront of integrating
                    new technologies into the energy industry, with 
                    <ul> 
                        <li>multiple patents pending around extended reality, autonomous drone inspections, and EV charging</li>
                        <li>architecting new business models to produce and deliver energy to customers</li>
                    </ul>
                </p>
                <p>
                    From leading hackathons to evaluating startups for our venture capital firm, I 
                    thrive on turning bold ideas into reality!
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Patagonia, 2024!
                        </sub>
                    </p>
                </div>

                <h3>About Me</h3>
                <br />
                <p>
                    I was born and raised in <a href="https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida">West Palm Beach, 
					Florida</a>, where I went to <a href="https://en.wikipedia.org/wiki/Suncoast_Community_High_School">Suncoast 
					High School</a> and gained interest in programming, graphic design, and game development. I went on to pursue 
					my passion through a <a href = "http://www.cs.ucf.edu/">Computer Science</a> Bachelor's and Master's degree 
					at the <a href = "http://www.ucf.edu/">University of Central Florida</a>. While there, I grew my skills as a 
                    developer for the <a href = "https://techrangers.cdl.ucf.edu/">Techrangers</a>, a team that does web/application 
                    development for UCF. I also interned at <a href='http://www.nexteraenergy.com/'>NextEra Energy</a> where 
					I got to use Machine Learning and Natural Language Processing to automate processes and cut costs. 
                </p>
                <br />
                <p>
                    Afterwards, I was offered a fantastic opportunity in their Leadership Development Rotational Program to explore different
                    areas of the company and gain experience quickly, and I took that opportunity in a heartbeat! While here, I'm 
                    pursuing my MBA at the <a href = "https://www.umass.edu/">University of Massachussetts Amherst</a> as I become 
                    increasingly interested in the challenge of leadership and understanding how the business works. 
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>Beyond the Code</h3>
                        <br />
                        <p>
                            <b>When i'm not in front of a computer screen, </b>
                            you can usually find me outside playing any number 
                            of sports, playing instruments like piano and saxaphone, 
                            huddled around a board game, or watching movies.
                        </p>
                        <br />
                        <p>
                            I've also got a huge bug for traveling and an itch
                            to constantly explore new places!
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={riverplate} style={styles.river} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> River Plate Game!
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. 
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:ljoks0727@gmail.com">
                        ljoks0727@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '60%',
    },
    river: {
        height: 'auto',
        width: '100%'
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
