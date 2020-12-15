import React from 'react'
import { Switch, Route, Redirect } from 'wouter';
import Catalog from './pages/Catalog';
import Pokemon from './pages/Pokemon';
import Sorting from './pages/Sorting';
import { LanguageContextProvider } from 'context/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Switch>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/pokemon/:id" component={Pokemon}/>
            <Route path="/sorting/:type" component={Sorting}/>
            <Redirect to="/catalog"/>
        </Switch>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
