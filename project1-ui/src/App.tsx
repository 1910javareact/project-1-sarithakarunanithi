import React from 'react';
import './App.css';
// import { Home } from './components/home-component/HomeComponent';
import ReimbursementNavBar from './components/navbar-component/NavBarComponent';
import LoginComponent from './components/login-component/LoginContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
//4 words to remember -- import default from container  

// Function component
const App: React.FC = () => {
  return (
    //when return - only 1 root tag is allowed in the jsx 
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <ReimbursementNavBar />
          </nav>
          <Switch>
            <Route path='/login' component={LoginComponent} />
            {/* <Home /> */}

          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
