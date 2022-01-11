import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 20px 20px;
    background: var(--darkMain);
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
`;