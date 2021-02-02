import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import Homepage from './Homepage'
import UploadHeader from './UploadHeader'
import Postlist from './Postlist'
function App(){
    return(
        <Router>
        <Switch>
        <Route exact path="/" component={Homepage} />
            <Route exact path ="/posts/create" component = {UploadHeader}/>
            <Route exact path="/posts" component={Postlist} />
        </Switch>
    </Router>
    );
}
export default App;