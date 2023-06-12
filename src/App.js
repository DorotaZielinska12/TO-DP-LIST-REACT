import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import TaskPage from "./features/tasks/TaskPage";
import { toTask, toAuthor, toTasks } from "./routes";
import Navigation from "./Navigation";

export default () => (
    <HashRouter>
        <Navigation />

        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <Author />
            </Route>
            <Route>
                <Redirect to={toTasks()}/>
            </Route>
        </Switch>
    </HashRouter>
);