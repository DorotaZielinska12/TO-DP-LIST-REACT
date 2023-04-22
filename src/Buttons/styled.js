import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.5s;
    border-bottom: 1px solid transparent;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:active {
       filter: brightness(120%);
    }
`;