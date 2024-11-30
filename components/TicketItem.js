import React from 'react';

const TicketItem = ({ text, direction = 'up' }) => {
    const triangle = direction === 'up' ? '▲' : '▼';
    const colorClass = direction === 'up' ? 'text-green-500' : 'text-red-500';

    return (
        <div className="ticker-item">
            <span className={colorClass}>{triangle}</span> {text}
        </div>
    );
};

export default TicketItem;