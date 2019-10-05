import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Add, Home, Remove } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/adicionar" component={ Add }/>
        <Route path="/remover" component={ Remove }/>

        <Route path="/" component={ Home }/>
      </Switch>
    </Router>
  );
}

export default App;
