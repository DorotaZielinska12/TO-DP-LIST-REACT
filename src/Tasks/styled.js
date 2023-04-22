import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    transition: background 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(120, 60%, 35%);

        &:hover {
            background: rgb(6, 133, 6);
        }

        &:active {
            background: rgb(31, 207, 31);
        }
    `}

    ${({ remove }) => remove && css`
        background: hsl(348, 85%, 47%);

        &:hover {
            background: hsl(348, 74%, 54%);
        }

        &:active {
            background: hsl(348, 84%, 64%);
        }
    `}
`;