import Container from "../../common/Container"
import { Header } from "../../common/Section/styled"
import Section from "../../common/Section"

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Dorota Zielinska"
            body={
                <>
                    <p>
                        Urodzilam sie w Polsce gdzie tez podjelam i ukonczylam edukacje.
                        W wieku 21 postanowilam wyjechac do UK gdzie podjelam prace w swoim zawodzie jako krawcowa.
                        Zaczelam tez nauke wieczorowa w pobliskim Colleague aby podciagnac sie z Angielskiego, tam tez poznalam Artura.
                        Po jakims czasie wzielismy slub i urodzil nam sie syn Dominik.
                        Niesty malzensto nie przetrwalo proby czasu wiec obecnie sama wychowuje syna.
                        Nie koncze jednak drogi ku samodoskonaleniu dlatego tez zaczelam kurs programowania z YouCode.
                        W wolnej chwili chodze na silownie i spa.
                        Uwielbiam tez sluchac muzyki, spacerowac, plywac czy podrozowac po Swiecie a mam juz na koncie kilka ciekawych zakatkow 😉

                    </p>
                </>
            }
        />
    </Container>
);