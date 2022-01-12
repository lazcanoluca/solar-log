import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--darkMain);
    max-width: var(--maxWidth);
    margin: 0 auto;

    .hide {
        display: none;
    }
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
    }
`;

export const Filters = styled.div`
    width: 100%;

    & > * {
        padding: 1rem;
        border: 2px solid;
        break-inside: avoid-column;
    }

    @media (min-width: 480px) {
        column-count: 2;
        column-fill: balance|auto;
    }
    @media (min-width: 720px) {
        column-count: 3;
    }
    @media (min-width: 952px) {
        column-count: 4;
    }
`;

export const FilterBodyTypes = styled.div`
    list-style: none;
`;

export const Button = styled.button`
    padding: .75rem 1.5rem;
    margin: 1rem;
    border-radius: 1.5rem;
    color: ${props => props.primary ? 'var(--darkMain)' : 'var(--lightMain)'};
    background-color: ${props => props.primary ? 'var(--lightMain)' : 'var(--darkMain)'};
    border: 2px solid ${props => props.primary ? 'var(--darkMain)' : 'var(--lightMain)'};


    :hover {
        cursor: pointer;
        color: ${props => props.primary ? 'var(--darkMain)' : 'var(--darkMain)'};
        background-color: ${props => props.primary ? 'var(--lightMain)' : 'var(--lightMain)'};
        border: 2px solid ${props => props.primary ? 'var(--lightMain)' : 'var(--lightMain)'};
    }
`;

export const FilterOrder = styled.div`
    div {
        display: flex;
    }
`;

export const FilterOrderBy = styled.div`
    select {
        color: black;
    }

    option {
        color: black;
    }
`;

export const FilterOrderDir = styled.div`
`;

export const FilterRange = styled.div`
    input {
        color: black;
    }
`;
