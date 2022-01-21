import React from 'react';
import { Wrapper } from './LoadMore.styles';

import Button from '../Button';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadMore = ({setIsLoadingMore}) => {
    
    const func = () => {
        setIsLoadingMore(true);
    }
    
    return(
        <Wrapper>
            <Button primary text='Load more' icon={faSpinner} callback={func}/>
        </Wrapper>
    );
};

export default LoadMore;
