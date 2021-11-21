import React from 'react'
import HeaderComponent from './HeaderComponent'
import Home from './HomeComponent';
import NewJoke from '../NewJoke';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import { ProtectedRoute } from './protected.route';

function Main () {
    return (
        <div>
            <HeaderComponent />
                <Switch>
                    <Route path ='/home' component={Home}/>
                    <Route path ='/login' component={NewJoke} />
                    <ProtectedRoute
                        exact
                        path="/admin"
                        component={NewJoke}
                    />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
        </div>
    )
}

export default Main;
