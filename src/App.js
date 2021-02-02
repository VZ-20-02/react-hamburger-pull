import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import FAQ from './Components/FAQ';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </Router>
  );
}

export default App;
