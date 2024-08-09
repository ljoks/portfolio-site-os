import React from 'react';
import ResumeDownload from './ResumeDownload';
import vrdrones from '../../assets/pictures/NextEra VR.jpeg'

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>NextEra</h1>
                       
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'http://www.nexteraenergy.com/'}
                        >
                            <h4>NextEraEnergy.com</h4>
                        </a>
                        
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Ignite Leadership Development Rotational Program</h3>
                        <b>
                            <p>2022 - 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    <a href="http://www.nexteraenergy.com/">Nextera Energy, Inc. </a>
                    is a Fortune 200 energy company and the largest energy utility in 
                    North America, but more importantly, a Fortune top 25 in the world 
                    in innovation.
                </p>
                <br />
                <p>
                    Ignite is a 2 year, 4 rotation program in NextEra Energy's IT business 
                    unit. It allows select participants to try roles in areas from AI to 
                    Cybersecurity, Cloud to Data Science and more. At the same time, we 
                    get a holistic view of the company, understanding how teams and business 
                    units interact, and participate in various leadership development programs 
                    and activities.
                </p>
                <ul>
                    <li>
                        <p>
                            <b>Digital Innovation</b>
                            <br />
                            <ul>
                                <li>Multiple patents pending around extended reality and artificial intelligence </li>
                                <li>CIO Award for digital innovation, recognized for demonstrating how we can leverage metaverse technology in the energy industry across various initiatives</li>
                                <li>Leading planning & coordination of a company-wide, week-long hackathon; ~200 participants, mentors, judges with 6 resulting projects moving now moving into production</li>
                                <li>Employee Engagement lead for a cohort of 40</li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Enterprise Security Architect</b>
                            <ul>
                                <li>Achieved $500K in cost avoidance as product lead for cyber systems assessment internal tooling</li>
                                <li>GIAC Security Essentials certification (GSEC) </li>
                                <li>Evaluated cybersecurity startups in partnership with our VC arm</li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Innovation Engineer & AI Project Manager - FPLAir Drone Image Recognition</b>
                            <ul>
                                <li>Designed and developed a pipeline for generating and self-annotating synthetic imagery using Unity 3D, enhancing AI model training for fault detection in field equipment</li>
                                <li>Managed external vendors to develop 4 AI models on drone imagery, reducing the need for manual visual inspections to detect faulty equipment</li>
                                <li>Developed strategy with Apple to effectively leverage the Vision Pro, starting with leading first project with an external vendor to develop an immersive training experience for power delivery operations</li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Drone Hurricane Response Operations Coordinator (Ongoing Storm Role)</b>
                            <ul>
                                <li>Responsible for coordinating the deployment of drone pilots during critical hurricane response periods</li>
                            </ul>
                        </p>
                    </li>
                </ul>
                <div className="captioned-image">
                    <img src={vrdrones} alt="architecture" />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 1: </b> Remotely operating drones in mixed reality! One of 3 
                                companies in the country with FAA waivers to do so!
                            </sub>
                        </p>
                    </div>
                </div>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>UCF</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://techrangers.cdl.ucf.edu/'}
                        >
                            <h4>techrangers.cdl.ucf.edu</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Web Applications Developer</h3>
                        <b>
                            <p>2017 - 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    The <a href="https://techrangers.cdl.ucf.edu/home.php">Techrangers®</a> is a talented 
                    team of student developers at the Center for Distributed Learning, who provide web/application development
                    for the University of Central Florida (UCF) and course development for faculty. 
                    <br />
                    <br />
                    Over 5 years, I've grown from a beginner programmer to a full-stack web developer, contributing to 
                    numerous projects and gaining proficiency in the skills above. With my experience, I've also taken the responsibility
                    to mentor new student developers as they join the Techranger team, passing on what I can offer to those that were in 
                    my shoes not long ago.
                </p>
                <br />
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>NextEra</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://nexteraenergy.com/'}
                        >
                            <h4>www.nexteraenergy.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>Summers '19, '20, '21</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            Applied problem solving and technical skills to operate
                            large equipment such as rain machines, fog machines, small
                            explosives and general rigging with a professional crew of
                            50+ people.
                        </p>
                    </li>
                    <li>
                        <p>Introduced AI and NLP to automate project planning process and save 800 hours/year in manual labor</p>
                    </li>
                    <li>
                        <p>Implemented python automation scripts that caught when jobs were deviating from their planned costs, catching deviations as high as $1M</p>
                    </li>
                    <li>
                        <p>Built and deployed a serverless status page to monitor the health of an internal work management tool using Cloudformation, Lambda, APIGateway, DynamoDB, RDS, IAM, and more</p>
                    </li>
                    <li>
                        <p>Converted CI/CD platform to Github Actions for first complex project in the company, enabling an easier transition for all future projects in a company-wide move to the new platform</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
