import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Switch>
    <Route path='/about' component={About}/>
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />
  </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
