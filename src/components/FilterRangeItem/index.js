import React, { useState } from 'react';
import { Wrapper, Content } from './FilterRangeItem.styles';

const FilterRangeItem = ({ range_name, max, setMax, min, setMin }) => {

    return (
        <Wrapper>
            <Content>
                <p>{range_name}</p>
                <div className='set-range'>
                    <input
                        type='number'
                        placeholder='from'
                        value={min || ''}
                        onChange={event => setMin(event.target.value)}
                    />
                    -
                    <input
                        type='number'
                        placeholder='to'
                        value={max || ''}
                        onChange={event => setMax(event.target.value)}
                    />
                </div>
            </Content>
        </Wrapper>
    );
};

export default FilterRangeItem;