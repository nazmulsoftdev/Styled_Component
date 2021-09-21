import React from 'react'
import Watch from './Watch/Watch'
import '../assets/css/local.css';
import Shoes from './Shoes/Shoes';
import Shart from './Shart/Shart';

function WrapComponent({className}) {
    return (
        <div className={className}>
            <Watch />
            <Shoes />
            <Shart/>
        </div>
    )
}

export default WrapComponent
