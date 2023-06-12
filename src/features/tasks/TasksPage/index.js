import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadan" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadan"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;