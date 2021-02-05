import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";
import Homepage from './Components/Home/Homepage'
import UploadHeader from './Components/upload/Uploadheader'
import Postlist from './Components/Landing/Postlist'
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