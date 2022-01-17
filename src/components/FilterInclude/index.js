import React from 'react';
import { Wrapper, Content, BodyList } from './FilterInclude.styles';

const FilterInclude = ({bodyType, setBodyType}) => {

    const body_types = {
        star: 'Star',
        planets: 'Planets',
        dwarf_planets: 'Dwarf planets',
        asteroids: 'Asteroids',
        comets: 'Comets',
        moons: 'Moons'
    };

    const handleOnChangeBodyTypes = (key) => {

        const updatedBodyType = Object.fromEntries(Object.entries(bodyType).map(
            ([ itemBodyType, state ]) => (key == itemBodyType
                                                ? [itemBodyType, !state]
                                                : [itemBodyType, state])
        ));

        setBodyType(updatedBodyType);
    };

    return (
        <Wrapper>
            <Content>
                <BodyList>
                    {Object.entries(body_types).map( ([ key, param ], index) => (
                        <li key={index}>
                            <input
                                type='checkbox'
                                name={key}
                                value={param}
                                checked={bodyType[key]}
                                onChange={() => handleOnChangeBodyTypes(key)}
                            />
                            <label>{param}</label>
                        </li>
                    ))}
                </BodyList>
            </Content>
        </Wrapper>
    );
};

export default FilterInclude;