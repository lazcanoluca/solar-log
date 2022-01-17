import React from 'react';

import { Wrapper } from './Thumb.styles';

const Thumb = ({name,
                type,
                radius,
                orbit,
                clickable }) => (
    <Wrapper type={type}>
        <div className='top'>
            <h3>{name}</h3>
            <p>{type}</p>
        </div>
        <div className='bottom'>
            <ul>
                <li>
                    <p>Radius: {radius}</p>
                </li>
                <li>
                    <p>Orbit (km): {orbit} M</p>
                </li>
                <li>
                    <p>Orbit (AU): {(orbit/150).toFixed(2)}</p>
                </li>
            </ul>
        </div>
    </Wrapper>
);

export default Thumb;
