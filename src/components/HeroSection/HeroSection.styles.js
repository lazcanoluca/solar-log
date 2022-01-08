import styled from "styled-components";

export const Wrapper = styled.div`
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, .65) 30%,
        rgba(0, 0, 0, 0) 100%
    ), url(${({ image }) => image});
    height: calc(100vh - var(--headerHeight));
    background-size: cover;
    background-position: center;
`;

export const Content = styled.div`
    font-size: var(--fontHuge);
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;

    padding-left: 4rem;

    h1 {
        font-size: var(--fontVeryBig);

        span {
            font-size: var(--fontHuge)
        }

    }
    
    p {
        margin-top: 3rem;
    }
`;

export const Text = styled.div``;