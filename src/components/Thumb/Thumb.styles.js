import styled from "styled-components";

export const Wrapper = styled.div`

    padding: 15px 0 15px 0;
    overflow: hidden;
    border-radius: 1rem;
    border: solid 2px var(--lightMain);

    h1, h2, h3, p {
        text-decoration: underline var(--darkMain); /* 'none' doesn't work, wtf!!! */
    }

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    h3, p {
        color: var(--lightMain);
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 10px;
    }

    ul {
        list-style: none;
    }

    li {
        break-inside: avoid-column;
        border-bottom: 1px solid var(--lightMain);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: .5rem;
        padding-bottom: 1rem;
    }

    :hover {
        background-color: var(--medMain);
        cursor: pointer;
    }

    .bottom {
        padding: 15px;
        column-count: 2;
    }

    .value {
        font-size: 1.3em;
        margin-top: 10px;
    }
`;