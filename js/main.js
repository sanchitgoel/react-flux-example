// Main Js: Index template 
// Used to render the application in HTML Page

// Import Statements
import React from 'react';
import ReactDOM from 'react-dom';
import SearchList from "./layouts/SearchList.js";
import Details from "./layouts/Details.js";
import Favourite from "./layouts/Favourite.js";
import {   BrowserRouter as Router,  Route, browserHistory} from 'react-router-dom';


//Rendering DOM VIA Router, Different Pages to display when Paramerters change's in URL 
ReactDOM.render(
	<Router history={browserHistory}>
    <div>
      	<Route exact path="/" component={SearchList}/>
		<Route path="/details/:foodID" component={Details}/>
		<Route path="/favourite" component={Favourite}/>
    </div>
  </Router>
, document.getElementById('app'));
			

