import React from 'react';

import { Wrapper, Content, Image, Text } from './ObjectInfo.styles';

const ObjectInfo = ({
    name,
    type,
    radius,
    perihelion,
    aphelion,
    eccentricity,
    inclination,
    mass,
    volume,
    density,
    gravity,
    escape,
    orbital,
    rotational,
    discovered_in,
    discovered_by,
    orbit,
    moons,
    around
}) => {

    return (
        <Wrapper>
            <Content>
                <Image>

                </Image>
                <Text>
                    <div className='top'>
                        <h1>{name}</h1>
                        <p>{type}</p>
                    </div>
                    <div className='bottom'>
                        <ul>
                            <li>
                                <p>Mean Radius</p>
                            </li>
                            <li>
                                <p>Perihelion / Aphelion</p>
                            </li>
                            <li>
                                <p>Eccentricity</p>
                            </li>
                            <li>
                                <p>Inclination</p>
                            </li>
                            <li>
                                <p>Mass</p>
                            </li>
                            <li>
                                <p>Volume</p>
                            </li>
                            <li>
                                <p>Density</p>
                            </li>
                            <li>
                                <p>Surface gravity</p>
                            </li>
                            <li>
                                <p>Escape velocity</p>
                            </li>
                            <li>
                                <p>Orbital period</p>
                            </li>
                            <li>
                                <p>Rotational period</p>
                            </li>
                            <li>
                                <p>Discovered in</p>
                            </li>
                            <li>
                                <p>Discovered by</p>
                            </li>
                            {type != 'Moon' &&
                                <li>
                                    <p>Orbit</p>
                                </li>
                            }
                            {type !== 'Moon' &&
                                <li>
                                    <p>Moons</p>
                                </li>
                            }
                            {type === 'Moon' &&
                                <li>
                                    <p>Around</p>
                                    <p className='value'>{around.charAt(0).toUpperCase() + around.substring(1)}</p>
                                </li>
                            }
                        </ul>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
};

export default ObjectInfo;