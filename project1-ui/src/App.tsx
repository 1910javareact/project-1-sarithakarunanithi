import React from 'react';
import './App.css';
// import { Home } from './components/home-component/HomeComponent';
import ReimbursementNavBar from './components/navbar-component/NavBarComponent';
import LoginComponent from './components/login-component/LoginContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store';
import UsersDisplayComponent from './components/users-dispaly/UsersDisplayContainer';
import ReimbursementByStatusComponent from './components/reimbursement-bystatus-display/ReimbursementByStatusContainer';
import UseridComponent from './components/userid-component/UseridContainer';
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
            <Route path='/users/display/id' component={UseridComponent} />
            <Route path='/users/' component={UsersDisplayComponent} />
            <Route path='/reimbursements/status/' component={ReimbursementByStatusComponent} />

            {/* <Home /> */}

          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
