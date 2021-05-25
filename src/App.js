import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Champions from './components/Champions/Champions.js';
import Home from './components/Home/Home.js';
import Items from './components/Items/Items.js';
import Navbar from './components/Navbar/Navbar.js';
import Ranks from './components/Ranks/Ranks.js';
import Spells from './components/Spells/Spells.js';
import Tutorials from './components/Tutorials/Tutorials.js';
import DataContextProvider from './DataContext.js';

function App() {
  return (
    <DataContextProvider>
      <Router>
        <div className="App">
          <Navbar/>

          <Switch>
            <Route exact path='/' component={Home}/>

            <Route exact path='/spells' component={Spells}/>

            <Route exact path='/items' component={Items}/>

            <Route exact path='/champions' component={Champions}/>

            <Route exact path='/ranks' component={Ranks}/>

            <Route exact path='/tutorials' component={Tutorials}/>
          </Switch>
        </div>
      </Router>
    </DataContextProvider>
  );
}

export default App;