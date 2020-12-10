import React from 'react'
import { Switch, Route } from 'wouter';
import Catalog from './pages/Catalog';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/catalog" component={Catalog}/>
          <Route component={Catalog}/>
      </Switch>
    </div>
  );
}

export default App;
