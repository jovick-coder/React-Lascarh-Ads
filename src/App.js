import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import ErrorPage from './pages/error_page/error_page.component';
import HomePage from './pages/home_page/home_page.component';

const App = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/error" component={ErrorPage} />
                <Redirect to='/error' />
            </Switch>

        </>
    );
}

export default App;