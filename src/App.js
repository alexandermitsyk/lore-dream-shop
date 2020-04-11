import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
          <Route exact path='/signup' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
