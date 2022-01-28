import React from 'react';
import { Millions, Thousands, Billions } from '../../helpers';

import { Wrapper } from './Thumb.styles';

import { Link } from 'react-router-dom';

const Thumb = ({id,
                name,
                type,
                radius,
                orbit,
                gravity,
                moons,
                around,
                clickable }) => (

    <Link to ={ `/${id}` } >
        <Wrapper type={type}>
            <div className='top'>
                <h3>{name}</h3>
                <p>{type}</p>
            </div>
            <div className='bottom'>
                <ul>
                    <li>
                        <p>Radius (km)</p>
                        <p className='value'>{radius >= 1000 ? Thousands(radius)+'K' : radius}</p>
                    </li>
                    { type != 'Moon' &&
                        <li>
                            <p>Orbit (km)</p>
                            <p className='value'>{orbit >= 1000000000 ? Billions(orbit)+'B'
                                : orbit >=1000000 ? Millions(orbit)+'M' : orbit}</p>
                        </li>
                    }
                    { type != 'Moon' &&
                        <li>
                            <p>Orbit (AU)</p>
                            <p className='value'>{(orbit/150000000).toPrecision(2)}</p>
                        </li>
                    }
                    <li>
                        <p>Gravity (m/s2)</p>
                        <p className='value'>{gravity}</p>
                    </li>
                    <li>
                        <p>Gravity (g)</p>
                        <p className='value'>{(gravity/9.8).toPrecision(2)}</p>
                    </li>
                    {type != 'Moon' &&
                        <li>
                            <p>Moons</p>
                            <p className='value'>{moons ? moons : '-'}</p>
                        </li>
                    }
                    {type == 'Moon' &&
                        <li>
                            <p>Around</p>
                            <p className='value'>{around.charAt(0).toUpperCase() + around.substring(1)}</p>
                        </li>
                    }
                </ul>
            </div>
        </Wrapper>
    </Link>
);

export default Thumb;
