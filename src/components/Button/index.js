import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { Wrapper } from "./Button.styles";

const Button = ({ type, resetFilters }) => {
    return (
        <Wrapper
            type={type ? 'primary' : ''}
            onClick={() => resetFilters()}
        >
            <div className='icon'>
                <FontAwesomeIcon
                    className='icons'
                    icon={faTrashAlt}
                    size='1x'
                />
            </div>
            <div className='content'>
                <p>Reset filters</p>
            </div>
        </Wrapper>
    )
};

export default Button;