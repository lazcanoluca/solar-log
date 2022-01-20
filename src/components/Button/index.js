import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper } from "./Button.styles";

const Button = ({ type, text, callback, icon }) => {
    return (
        <Wrapper
            type={type ? 'primary' : ''}
            onClick={callback}
        >
            <div className='icon'>
                <FontAwesomeIcon
                    className='icons'
                    icon={icon}
                    size='1x'
                />
            </div>
            <div className='content'>
                <p>{text}</p>
            </div>
        </Wrapper>
    )
};

export default Button;