import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
