import styled from "styled-components";

export const Wrapper = styled.div`
    border: 2px solid;
    border-radius: 1.5rem;
    break-inside: avoid-column;
    overflow: hidden;
    cursor: pointer;

    .hide {
        display: none;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;
    background-color: var(--lightMain);
    background-clip: padding-box;
    
    * {
        color: var(--darkMain);
    }
`;

export const Content = styled.div`
    padding: 1rem;
`;