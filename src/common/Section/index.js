import { Wrapper, Header, H2, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Header>
            <H2>{title}</H2>
            {extraHeaderContent}
        </Header>
        <SectionBody>
            {body}
        </SectionBody>
    </Wrapper>
);

export default Section;