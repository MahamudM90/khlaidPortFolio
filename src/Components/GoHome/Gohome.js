import React from 'react';

const Gohome = () => {
    const emojiStyle = {
        fontSize: "3.25rem"
    }
    const a = {
        textDecoration : 'none'
    }
    const divPosition = {
        position: 'fixed',
        bottom: '100px',
        right: "0",
        zIndex : "3"
    }
    return (
        <div style={divPosition} className="divPosition">
            <span style={emojiStyle}>
                <a href="#home" style={a}>👆</a>
            </span>
        </div>
    );
};

export default Gohome; 