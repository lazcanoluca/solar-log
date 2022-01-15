import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
    input {
        color: black;
        width: 100%;
        padding: .5rem 1rem;
        border-radius: 1.5rem;
        border: 2px solid var(--darkMain);
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .set-range {
        display: flex;
        align-items: center;
    }
`;