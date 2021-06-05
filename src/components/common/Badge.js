import React from 'react';

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

export default Badge;