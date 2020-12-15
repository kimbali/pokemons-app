import React from 'react'
import { Switch, Route } from 'wouter';
import Catalog from './pages/Catalog';
import { LanguageContextProvider } from 'context/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Switch>
            <Route path="/catalog" component={Catalog}/>
            <Route component={Catalog}/>
        </Switch>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
