import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import Home from './Components/Home/Home'
import UploadHeader from './Components/upload/Uploadh'
import Postlist from './Components/Landing/Postlist'
function App(){
    return(
        <Router>
        <Switch>
        <Route exact path="/" component={Home} />
            <Route exact path ="/posts/create" component = {UploadHeader}/>
            <Route exact path="/posts" component={Postlist} />
        </Switch>
    </Router>
    );
}
export default App;