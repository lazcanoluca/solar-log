import React from 'react';
import { Wrapper, Content, OrderByList, OrderDirIcon } from './FilterOrderBy.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSortNumericDown,
    faSortNumericUp,
    faSortAlphaDown,
    faSortAlphaUp,
} from "@fortawesome/free-solid-svg-icons";

const FilterOrderBy = ({
    selectedOrderBy,
    setSelectedOrderBy,
    orderDir,
    setOrderDir
}) => {

    const order_by = {
        englishName: 'Name',
        // moons: 'Number of moons',
        perihelion: 'Perihelion',
        aphelion: 'Aphelion',
        eccentricity: 'Eccentricity',
        inclination: 'Inclination',
        // mass: 'Mass',
        // vol: 'Volume',
        density: 'Density',
        gravity: 'Gravity',
        escape: 'Escape velocity',
        meanRadius: 'Mean Radius',
        sideralOrbit: 'Orbital period',
        sideralRotation: 'Rotation period',
        avgTemp: 'Average temperature',
        bodyType: 'Body type'
    };

    // const [selectedOrderBy, setSelectedOrderBy] = useState(
    //     'englishName'
    // );

    // const [orderDir, setOrderDir] = useState(false);

    return (
        <Wrapper>
            <Content>
                <OrderByList>
                    <select
                        value={selectedOrderBy}
                        onChange={(event) => setSelectedOrderBy(event.target.value)}
                    >
                        {Object.entries(order_by).map( ([ key, param ], index) => (
                            <option
                                key={index}
                                value={key}
                            >{param}</option>
                        ))}
                    </select>
                </OrderByList>
                <OrderDirIcon>
                    <FontAwesomeIcon
                        icon={
                            (selectedOrderBy === 'englishName' || selectedOrderBy === 'bodyType')
                                ? (orderDir ? faSortAlphaUp : faSortAlphaDown)
                                : (orderDir ? faSortNumericUp : faSortNumericDown)
                        }
                        size='2x'
                        onClick={() => setOrderDir(prev => !prev)}
                    />
                </OrderDirIcon>
            </Content>
        </Wrapper>
    );
};

export default FilterOrderBy;