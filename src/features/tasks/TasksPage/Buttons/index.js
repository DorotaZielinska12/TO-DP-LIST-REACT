import { useSelector, useDispatch } from "react-redux";
import { Div } from "./styled";
import Button from "../Button";
import {
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Div>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaz" : "Ukryj"} ukonczone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukoncz wszystkie
                    </Button>
                </>
            )}
        </Div>
    )
};


export default Buttons;