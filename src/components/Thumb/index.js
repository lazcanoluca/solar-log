import React from 'react';

import { Wrapper } from './Thumb.styles';

const Thumb = ({ name, type, clickable }) => (
    <Wrapper name={name}>
        <div className='top'>
            <h3>{name}</h3>
            <p>{type}</p>
        </div>
        <div className='bottom'>
            <p>Some other info with nice icons.</p>
        </div>
    </Wrapper>
);

export default Thumb;
