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
import { AuthContext } from './context';
import GamePlatformSortPage from './pages/GamePlatformSortPage';
import GameTitleSortPage from './pages/GameTitleSortPage';
import GameGenreSortPage from './pages/GameGenreSortPage';
import seed from './api/seed'
class App extends React.Component<any , any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      token: '',
      role: ''
    };
  }

  setAuth = (token: string, role: string) =>  {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    this.setState({ token: token, role: role })
  }
  removeAuth = () => {
    this.setState({token: '', role: ''})
    localStorage.clear();
  }
  componentDidMount() {
    // seed();
    if(localStorage.getItem('token')) this.setState({token: localStorage.getItem('token')});
    if(localStorage.getItem('role')) this.setState({role: localStorage.getItem('role')});
  }
  render() {
    return (
      <AppContainer>
        <AuthContext.Provider value={{token: this.state.token, role: this.state.role, setAuth: this.setAuth, removeAuth: this.removeAuth}}>
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/profile' component={ProfilePage} />
              <Route exact path='/moderator' component={ModeratorPage} />
              <Route exact path='/admin' component={AdminPage} />
              <Route exact path='/game/id/:id' component={GamePage} />
              <Route exact path='/review/:id' component={ReviewPage} />
              <Route exact path='/game/platform/:platform' component={GamePlatformSortPage} />
              <Route exact path='/game/genre/:genre' component={GameGenreSortPage} />
              <Route exact path='/game/title/:title' component={GameTitleSortPage} />
              <Route exact path='/game/id/:id' component={GamePage} />
            </Switch>
          </Router>
        </AuthContext.Provider>
      </AppContainer>
    );
  }
}

export default App;
