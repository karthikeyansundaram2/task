import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Matches from './Matches';
import League from './League';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
ReactDOM.render(
    <BrowserRouter>
   <div>
	<Route path='/' component={App} />
    <Route path='/Matches' component={Matches} />
    <Route path='/League' component={League} />
   </div>
	</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
