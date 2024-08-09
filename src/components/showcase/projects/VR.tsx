import React from 'react';

import poltergeist from '../../../assets/pictures/projects/vr/poltergeist.jpg'

import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface VRProjectsProps {}

const VRProjects: React.FC<VRProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Mixed Reality</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite VR, AR, and other spatial & 3D projects I have worked on
                over the last few years (outside of work).
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>VR Dungeons & Dragons</h2>
                <h4>Virtual Reality</h4>
                <br />
                <p>
                    Created an immersive virtual reality experience to play 
                    dungeons and dragons with friends using Unity and OpenXR. 
                    Players can roll dice, interact with their character sheet, 
                    place and switch into the body of their miniature on the battle map.
                </p>
                <br />
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={`https://youtube.com/embed/ATcbdhFW02E`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="captioned-image">
                    
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 1: </b> Demo of features taken in VR Dungeons & Dragons preview - 
                                including casting spells, entering 'miniature mode', and character sheets
                            </sub>
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <h2><a href='https://bit.ly/3wfQvBY'>AR Portfolio</a></h2>
                <h4>Augmented Reality</h4>
                <br />
                <p>
                    A series of AR projects that demonstrate proficiency in concepts including tracking, 
                    situated visualization, occlusion, tangible interactions, networked collaboration 
                    and more using AR Foundation and Vuforia SDK.
                </p>
                <br />
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={`https://youtube.com/embed/0NAjGxwb-lc?si=PaP-zHOLYEidMvNM`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="captioned-image">
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Demo of AR facial tracking 
                        </sub>
                    </p>
                </div>
            </div>
            
            <div className="text-block">
                <h2>Poltergeist</h2>
                <h4>3D Game Development</h4>
                <br />
                <p>
                    Built and deployed an online multiplayer survival/horror game using Unity3D 
                    and C#. A ghost chases players around a haunted mansion attempting to reap them 
                    into the spirit world, while players can use various power-ups and tech to hide and run. 
                </p>
                <br />
                <div className="captioned-image">
                    <img src={poltergeist} style={styles.image} alt="poltergeist" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Chess ai efficiently evaluates as many positions
                            as possible at the provided search depth
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

export default VRProjects;
