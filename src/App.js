import React from "react";

import { BrowserRouter as Router, Route} from "react-router-dom";

import Root from './components/Root/Root';

const App = () => (
	<div style={{width: 'auto', height: 'auto', background: '#0F1923'}}>
		<Router>
			<Route path="/" exact component={Root}></Route>
		</Router>
	</div>
);

export default App;