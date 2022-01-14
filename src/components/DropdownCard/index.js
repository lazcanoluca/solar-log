import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import { Wrapper, Title, Content } from './DropdownCard.styles';

const DropdownCard = ({ title, content }) => {

    const [hidden, setHidden] = useState(true);
    
    return (
        <Wrapper>
            <Title
                onClick={() => setHidden(prev => !prev)}
            >
                <h3>{title}</h3>
                <FontAwesomeIcon
                    icon={hidden ? faCaretDown : faCaretUp}
                    size='2x'
                />
            </Title>
            <Content className={hidden ? 'hide' : ''}>
                {content}
            </Content>
        </Wrapper>
    );
};

export default DropdownCard;
