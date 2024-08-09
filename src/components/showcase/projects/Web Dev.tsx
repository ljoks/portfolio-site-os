import React from 'react';

import ucfreact from '../../../assets/pictures/projects/web/UCFReact Question.png'
import leins from '../../../assets/pictures/projects/web/leins.webp'

import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface WebProjectsProps {}

const WebProjects: React.FC<WebProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Web Dev</h1>
            <h3>Full-Stack Projects</h3>
            <br />
            <p>
                Below are some of my favorite full-stack web development projects I have worked on
                over the last few years (outside of work).
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>UCF React</h2>
                <h3>Mobile & Web</h3>
                <h4>EdTech</h4>
                <br />
                <p>
                    Co-led a team of 5 to design, architect, and deploy a Classroom Response 
                    System specifically for UCF as a free alternative to monitor student 
                    engagement in real time. Wrote 100% of the serverless websocket API, 50% 
                    of the REST API and 30% of the React.js frontend for a mobile & web application 
                    scalable for 60k+ students and professors. 
                </p>
                <br />
                <div className="captioned-image">
                    <img src={ucfreact} style={styles.image} alt="ucf react question example" />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 1: </b> We created a simple, flexible, and effective 
                                in-house solution for increasing student engagement that allows 
                                professors to monitor student comprehension in real-time, and track 
                                participation in class.
                            </sub>
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <h2><a href='https://github.com/ljoks/Leineckers-Leins'>Leinecker's Leinls</a></h2>
                <br />
                <p>
                    Led a team of 5 to design and deploy a full-stack online game in which 
                    players use a mobile app as their fishing reel, using socket connections 
                    for real-time interaction with the website to catch fish as they swim by. 
                    Used Agile to manage project, Unity & C# for mobile development, Javascript 
                    and Socket.io for web.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={leins} style={styles.image}  alt="Leinecker's Leins Logo" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Leinecker's Leins Logo
                        </sub>
                    </p>
                </div>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    image: {
        height: 'auto',
        width: '60%',
    },
    caption: {
        width: '80%',
    },
    color: {
        color: 'blue'
    }
};

export default WebProjects;
