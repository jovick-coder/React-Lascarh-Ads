import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import PostAdsPage from './pages/postAds_page/postAds_page.component';
import AboutPage from './pages/about_page/about_page.component';
import DashBord from './pages/dashbord_page/dashbord_page.component';
import ErrorPage from './pages/error_page/error_page.component';
import ExplorePage from './pages/explore_page/explore_page.component';
import HomePage from './pages/home_page/home_page.component';
import LoginPage, { ForgotPassword, SignInPage } from './pages/login_page/login_page.component';
import ProfilePage from './pages/profile_page/profile_page.component';


const App = () => {
    return (
        <>
            <Switch>
                <Route path="/dashbord/post-ads" exact component={PostAdsPage} />
                <Route path="/dashbord/explore" exact component={ExplorePage} />
                <Route path="/dashbord/profile" exact component={ProfilePage} />
                <Route path="/dashbord" exact component={DashBord} />
                <Route path="/forgot-password" exact component={ForgotPassword} />
                <Route path="/sign-in" exact component={SignInPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/about-us" exact component={AboutPage} />
                <Route path="/error" component={ErrorPage} />
                <Route path="/" exact component={HomePage} />
                <Redirect to='/error' />
            </Switch>

        </>
    );
}

export default App;