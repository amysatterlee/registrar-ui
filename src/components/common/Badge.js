import React from 'react';
import '../../stylesheets/common.css';

const Badge = ({ text, color, icon }) => {
    const renderBadge = () => {
        if (icon) {
            return <><i className={icon}></i> &nbsp; {text.toUpperCase()}</>;
        }
        return text.toUpperCase();
    }
    return (
        <div className='badge' style={{ 'background': `${color}` }}>
            {renderBadge()}
        </div>
    )
};

Badge.defaultProps = {
    text: '',
    color: 'grey'
}

export default Badge;