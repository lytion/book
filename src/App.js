import React from "react";

import { BrowserRouter as Router, Route} from "react-router-dom";

import Root from './components/Root/Root';
import Werewolf from './components/Werewolf/Werewolf';
import TimesBomb from './components/TimesBomb/TimesBomb';
import MazeAdventure from './components/MazeAdventure/MazeAdventure';

const App = () => (
	<div style={{width: 'auto', height: 'auto', background: '#0F1923'}}>
		<Router>
			<Route path="/" exact component={Root}></Route>
			<Route path="/werewolf" exact component={Werewolf}></Route>
			<Route path="/timesbomb" exact component={TimesBomb}></Route>
			<Route path="/mazeadventure" exact component={MazeAdventure}></Route>
		</Router>
	</div>
);

export default App;