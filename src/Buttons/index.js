import { Div, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Div>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Pokaz" : "Ukryj"} ukonczone
                </Button>
                <Button
                    onClick={setAllDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukoncz wszystkie
                </Button>
            </>
        )}
    </Div>
);

export default Buttons;