import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--darkMain);
    padding: 15px 0 15px 0;
    border-radius: 1rem;
    border: solid 2px var(--lightMain);


    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }

    h2, p {
        color: var(--lightMain);
    }

    h3 {
        font-size: 1.5rem;
    }

    p {
        margin-top: 5px;
    }

    :hover {
        background-color: var(--medMain);
        cursor: pointer;
    }

    .bottom {
        padding: 15px;
    }
`;