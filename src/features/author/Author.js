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
                        I also started evening studies at the nearby Colleague to improve my English, and I met my future husband Artur there.
                        After some time We got married and get our son Dominik was born.
                        Life veryfied our plans and not everything goes well.
                        Unfortunate marriage did not survive the test of time.
                        However, I am not finishing my way to self-improvement, which is why I started a programming course with YouCode.
                        I think this course is a great idea, I feel very good in coding and programming.
                        In my free time apart from improve my new skills gained on course.
                        I like listening the music, dancing and swimming. I also love to travel and thus set new routes into the unknown
                        - already I have in my plan one interesting corner on world.
                    </p>
                </>
            }
        />
    </Container>
);