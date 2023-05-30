import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import TaskComponent from "./features/tasks/TaskComponent";
import Author from "./features/author/Author";

export default () => (
    <BrowserRouter basename="/TO-DO-LIST-REACT">
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                </li>
                <li>
                    <Link to="/author">Autor</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <TaskComponent />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
            </Switch>
        </nav>
    </BrowserRouter>
);