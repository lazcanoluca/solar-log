import React from 'react';
import { Wrapper, Content } from './FilterRange.styles';
import FilterRangeItem from '../FilterRangeItem';

const FilterRange = ({
    rangeMinRadius,
    setRangeMinRadius,
    rangeMaxRadius,
    setRangeMaxRadius,
    rangeMinOrbit,
    setRangeMinOrbit,
    rangeMaxOrbit,
    setRangeMaxOrbit
}) => {

    return (
        <Wrapper>
            <Content>
                <FilterRangeItem
                    range_name='Mean radius (in km):'
                    max={rangeMaxRadius}
                    setMax={setRangeMaxRadius}
                    min={rangeMinRadius}
                    setMin={setRangeMinRadius}
                />
                <FilterRangeItem
                    range_name='Orbital period (Earth days):'
                    max={rangeMaxOrbit}
                    setMax={setRangeMaxOrbit}
                    min={rangeMinOrbit}
                    setMin={setRangeMinOrbit}
                />
            </Content>
        </Wrapper>
    );
};

export default FilterRange;