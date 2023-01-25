import logo from './logo.svg';
import './App.css';
import { Switch, Route} from "react-router-dom";
import HomePage from './components/HomePage'
import Blog from './components/Blog'
import AboutMePage from './components/AboutMePage'

import RecentProjects from './components/RecentProjects'






function App() {

  return (
<div>


<Switch>

<Route exact path = '/'>
  <HomePage />
</Route>

<Route exact path = '/AboutMe'>
  <AboutMePage />
</Route>

<Route exact path = '/Blog'>
  <Blog />
</Route>

<Route exact path = '/RecentProjects'>
  <RecentProjects />
</Route>

<Route exact path = '/Resume'>
 
</Route>

</Switch>

</div>
  );
}

export default App;
