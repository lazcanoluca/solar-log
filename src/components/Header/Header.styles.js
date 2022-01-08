import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkMain);
    padding: 0 20px;
    height: var(--headerHeight);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: var(--maxWidth);
`;

export const LogoImg = styled.img`
    width: 75px;
`;

export const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    
    ul {
        height: 100%;
        display: flex;
        align-items: center;
        list-style: none;
    }

    li {
        display: flex;
        align-items: center;
        padding: 0 2rem;
        height: 100%;
        font-size: 1.3rem;
        user-select: none;
    }

    li:hover {
        background: var(--medMain);
        cursor: pointer;
    }
`;