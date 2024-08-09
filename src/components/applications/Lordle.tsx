import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface LordleAppProps extends WindowAppProps {}

const LordleApp: React.FC<LordleAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="Lordle"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© '}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default LordleApp;
