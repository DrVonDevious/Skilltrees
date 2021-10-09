import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './style/index.scss';
import Home from './components/home/Home';
import Tree from './components/tree/Tree';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trees/:id" component={Tree} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
