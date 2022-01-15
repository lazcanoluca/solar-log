import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
    border-radius: 1.5rem;
    height: 3rem;
    border: 2px solid var(--lightMain);

    display: flex;
    align-items: stretch;
    justify-content: space-between;

    overflow: hidden;

    div {
        background: var(--darkMain);
        color: var(--lightMain);
        padding: .75rem;
        * {
            color: var(--lightMain);
            font-size: 1.2em;
        }
    }

    input {
        padding: .75rem 1.5rem .75rem .75rem;
        width: 100%;
        border: none;
        color: var(--darkMain);
        background-color: var(--lightMain);
        :focus {
            outline: none;
        }
    }
`;