import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import pacman from '../../../assets/pictures/projects/ai/pacman.gif'
import chess from '../../../assets/pictures/projects/ai/chess.png'
import twitter from '../../../assets/pictures/projects/ai/sentiment analysis.png'

import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface AIProjectsProps {}

const AIProjects: React.FC<AIProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>AI</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite AI projects I have worked on
                over the last few years (outside of work).
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>ASL Recognition</h2>
                <h3>Real-time Object Detection</h3>
                <h5
                    style={styles.color}>
                        <a href="https://devpost.com/software/reading-american-sign-language-with-object-detection">
                            Winner: Best use of Google Cloud at KnightHacks 2021
                        </a>
                </h5>
                <br />
                <p>
                    Trained and implemented a real-time American Sign Language alphabet recognition system built on 
                    a convolutional neural network. A preliminary step to a more accessible world 
                    for the deaf and hard-of-hearing community.
                </p>
                <br />
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={`https://youtube.com/embed/gVuCCCWYTkA`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="captioned-image">
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Demo of system recognizing ASL characters signed in real-time
                        </sub>
                    </p>
                </div>
            </div>
            <div className="text-block">
                <h2>Twitter Sentiment Analysis with LSTMs</h2>
                <h4>Natural Language Processing</h4>
                <br />
                <p>
                    Research paper improving the mean absolute error rate of a 
                    Twitter sentiment classifier neural network, as well as applying 
                    it to a dataset of tweets from the Coronavirus pandemic to analyze 
                    the shift in trends and user behavior.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={twitter} style={styles.image}  alt="architecture" />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Bidirectional LSTM mechanism with CNN
                                architecture to transform text to a binary sentiment classification
                            </sub>
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <h2><a href="ljoks.github.io/chess-ai/ ">AI Chess</a></h2>
                <br />
                <p>
                    Built a chess AI achieving ~1500 elo rating. Board visualization 
                    and move generation based on algorithm using techniques such as 
                    search trees using minimax and alpha-beta pruning to improve efficiency.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={chess} style={styles.image} alt="ai chess" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Chess ai efficiently evaluates as many positions
                            as possible at the provided search depth
                        </sub>
                    </p>
                </div>
            </div>
            <div className="text-block">
                <h2>AI Pacman</h2>
                <br />
                <p>
                    Used pacman as a platform to visualize the implementation of 
                    various AI techniques - Multi-agent search, model-based and 
                    model-free reinforcement learning, Hidden Markov Decision models, 
                    informed state-space search, Naive Bayes.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={pacman} style={styles.image} alt="ai pacman gif" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> AI pacman uses reinforcement learning 
                            to achieve perfect automated gameplay
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

export default AIProjects;
