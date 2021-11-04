import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import AppContainer from './components/containers/AppContainer';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ReviewPage from './pages/ReviewPage';
import ModeratorPage from './pages/ModeratorPage';
import AdminPage from './pages/AdminPage';
import { IAuth } from './interfaces';

class App extends React.Component<{} , IAuth> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  setAuth(newAuth: IAuth) {
    this.setState({ ...newAuth })
  }
  removeAuth() {
    this.setState({token: undefined, role: undefined})
  }
  render() {
    return (
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path='/'>
              {this.state.token ? <HomePage /> : <Redirect to='login' />}
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/profile'>
              {this.state.token ? <ProfilePage /> : <Redirect to='login' />}
            </Route>
            <Route exact path='/moderator' component={ModeratorPage} />
            <Route exact path='/admin' component={AdminPage} />
            <Route exact path='/game/:id' component={GamePage} />
            <Route exact path='/review/:id' component={ReviewPage} />
          </Switch>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
