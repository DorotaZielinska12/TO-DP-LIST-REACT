import Container from "../../common/Container"
import { Header } from "../../common/Section/styled"
import Section from "../../common/Section"

export default () => (
    <Container>
        <Header title="Author" />
        <Section
            title="Dorota Zielinska"
            body={
                <>
                    <p>
                        I was born in Poland, where I also undertook and completed my education.
                        At the age of 21, I decided to go and live in the UK where I started work in my profession as a seamstress.
                        I also started evening studies at the nearby Colleague to improve my English, and I met Artur there.
                        After some time we got married and our son Dominik was born.
                        Unfortunate marriage did not survive the test of time.
                        However, I am not finishing my way to self-improvement, which is why I started a programming course with YouCode.
                        I think this course is a great idea, I feel very good in coding and programming
                        In my free time I go to the gym and spa.
                        I also love listening to music, dance, walking, swimming or traveling around the world and I already have some interesting corners 😉
                    </p>
                </>
            }
        />
    </Container>
);