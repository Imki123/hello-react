import React from 'react';

const MyLayout = ({name, children}) => {
    return (
        <div className="layout">
            <div className="fixed-box">MyLayout..</div>
            <div className="content">
                {name}님 반갑습니다 :D<br/>
                {children}
            </div>
            
            
            
        </div>
        
    );
};

MyLayout.defaultProps = {
    name : '기본 이름'
}

export default MyLayout;