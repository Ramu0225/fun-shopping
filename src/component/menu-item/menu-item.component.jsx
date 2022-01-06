import React from 'react';
import { Link } from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) =>(
    <div  className={`${size} menu-item`}>
        <div className='background-image'
                style={{
                backgroundImage: `url(${imageUrl})`}} />
        <Link className= 'option' to='/shop'>
        <div className='content'>
            <span className='title'><strong>{title.toUpperCase()}</strong></span>
            <span className='subtitle'>SHOP NOW</span>
            </div>
            </Link>
    </div>
);

export default MenuItem;