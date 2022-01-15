import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OrderByList = styled.div`
    width: 100%;
    display: inline-block;
    select {
        color: var(--darkMain);
        padding-right: 1rem;
        width: 100%;
        border-radius: 1.5rem;
        height: 3rem;
        border: 2px solid var(--lightMain);
        padding: .75rem 1.5rem .75rem .75rem;
    }
    option {
        color: var(--darkMain);
    }
`;

export const OrderDirIcon = styled.div`
    margin-left: 1rem;
`;