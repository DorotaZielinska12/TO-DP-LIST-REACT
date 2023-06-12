import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegoly zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body={!!task && (
                    <>
                        <strong>Ukonczono:</strong>: {task.done ? "Tak" : "Nie"}
                    </>
                )}
            />
        </Container>
    );
}

export default TaskPage;