import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px;
    background: white;
    box-shadow: 0 0 5px #ddd;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Header = styled.header`
    padding: 20px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
`;

export const H2 = styled.h2`
    font-size: 20px;
    margin: 0 auto;
`;

export const SectionBody = styled.div`
    padding: 20px;
`;