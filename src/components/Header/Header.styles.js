import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkMain);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
`;

export const LogoImg = styled.img`
    width: 75px;
`;

export const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    
    ul {
        display: flex;
        list-style: none;
    }

    li {
        display: block;
        padding: 2rem;
        font-size: 1.3rem;
        user-select: none;
    }

    li:hover {
        background: var(--medMain);
        cursor: pointer;
    }
`;