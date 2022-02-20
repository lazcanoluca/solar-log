import React from 'react';
import { Wrapper, Content } from './SearchBar.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchTerm, setSearchTerm }) => {

    return (
        <Wrapper>
            <Content>
                <div>
                    <FontAwesomeIcon
                        icon={faSearch}
                    />
                </div>
                <input
                    type='text'
                    placeholder='Search object'
                    onChange={event => setSearchTerm(event.target.value)}
                    value={searchTerm}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;