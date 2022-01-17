import styled from "styled-components";

export const Wrapper = styled.div`

    padding: 15px 0 15px 0;
    overflow: hidden;
    border-radius: 1rem;
    border: solid 2px var(--lightMain);

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        /* background-color: red; */
        /* z-index: 1; */
    }

    h3, p {
        color: var(--lightMain);
        z-index: 100;
    }

    h3 {
        font-size: 1.5rem;
    }

    .a {
        z-index: 1000;
    }

    p {
        margin-top: 5px;
    }

    ul {
        list-style: none;
    }

    :hover {
        background-color: var(--medMain);
        cursor: pointer;
    }

    .bottom {
        padding: 15px;
        column-count: 2;
    }
`;