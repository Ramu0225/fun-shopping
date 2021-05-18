import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) =>(
    <div  className={`${size} menu-item`}>
        <div className='background-image'
                style={{
                backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
            <span className='title'><strong>{title.toUpperCase()}</strong></span>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;