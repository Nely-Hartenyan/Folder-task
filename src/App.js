import Container from "./Components/Container";
import {Route, Switch} from "react-router-dom";
import TextItem from "./Components/FolderAndTextItems/TextItem";
import FolderItems from "./Components/FolderAndTextItems/FolderItems";
import { useSelector } from "react-redux";
import TrashItems from "./Components/Trash/TrashItems";
import TrashPage from "./Components/Trash/TrashPage";

function App() {

    const items = useSelector(state => state.items);
    const trash = useSelector(state => state.trashItems);

    return (
        <div>
            <Switch>
                <Route exact path = "/">
                    <Container items = { items }/>
                </Route>
                <Route path = '/folder/:Folderid'>
                    <FolderItems items = { items }/>
                </Route>
                <Route path = '/text/:Docid'>
                    <TextItem/>
                </Route>
                <Route path = '/trash'>
                    <TrashPage trash = { trash } items = { items } />
                </Route>
                <Route path = '/:Folderid'>
                    <TrashItems trash = { trash } />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
