import React from 'react';
import './App.css';
import NavigationComponent from './components/NavigationComponent';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from './components/Home';
import RegisterCustomer from './components/RegisterCustomer';
import ViewCustomers from './components/ViewCustomers';

function App() {
  return (
    <Router >
    <div className="App">
     
      <header className="container">
        <NavigationComponent />
      </header>
     
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  path="/viewCustomers" component={ViewCustomers}></Route>
          <Route  path="/registerCustomer" component={RegisterCustomer}></Route>
          
          
      </Switch>
     
    </div>
    </Router>  
  );
}

export default App;
