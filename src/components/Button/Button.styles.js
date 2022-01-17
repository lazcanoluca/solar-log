import styled from "styled-components";

export const Wrapper = styled.button`
    width: 13rem;
    height: 3rem;
    border-radius: 1.5rem;
    color: ${props => props.primary ? 'var(--darkMain)' : 'var(--lightMain)'};
    background-color: ${props => props.primary ? 'var(--lightMain)' : 'var(--darkMain)'};
    border: 2px solid ${props => props.primary ? 'var(--darkMain)' : 'var(--lightMain)'};

    display: flex;
    align-items: stretch;
    justify-content: space-between;

    overflow: hidden;

    .icon {
        background: var(--lightMain);
        color: var(--darkMain);
        padding: .75rem;
        * {
            color: var(--darkMain);
            font-size: 1.5em;
        }
    }

    .content {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
    }

    p {
        /* padding: .75rem 1.5rem .75rem .75rem; */
        color: ${props => props.primary ? 'var(--darkMain)' : 'var(--lightMain)'};
        /* white-space: nowrap; */
        /* min-width: 100%; */
    }

    :hover {
        cursor: pointer;
        p {
            color: ${props => props.primary ? 'var(--darkMain)' : 'var(--darkMain)'};
        }
        background-color: ${props => props.primary ? 'var(--lightMain)' : 'var(--lightMain)'};
        border: 2px solid ${props => props.primary ? 'var(--lightMain)' : 'var(--lightMain)'};
    }
`;
