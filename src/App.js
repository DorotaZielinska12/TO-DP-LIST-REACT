import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import TaskPage from "./features/tasks/TaskPage";


export default () => (
    <HashRouter basename="/TO-DO-LIST-REACT">
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/author">Autor</StyledNavLink>
                </li>
            </ul>
            <Switch>
            <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);