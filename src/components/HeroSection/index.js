import React from 'react';

import { Wrapper, Content, Text } from './HeroSection.styles';

const HeroSection = ({ image }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>Explore the <span>Solar System</span></h1>
                <p>Browse and learn about the planets and the main objects on the Solar System.</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroSection;
