import React from 'react'
import HeaderComponent from './HeaderComponent'
import Home from './HomeComponent';
import NewJoke from '../NewJoke';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main () {
    return (
        <div>
            <HeaderComponent />
                <Switch>
                    <Route path ='/home' component={Home}/>
                    <Route path ='/newjoke' component={NewJoke} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
        </div>
    )
}

export default Main;
