import React from 'react';

const Loading = props => {
    return (
        <div className={props.style}>
            <div className="fixed-box">Loading</div>
            <img src="/react.png" alt="로딩이미지"/>
        </div>
    );
};

export default Loading;