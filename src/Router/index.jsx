import React from 'react';
import { Switch, Route } from "react-router-dom";

// layout

import MainLayout from '../layouts/MainLayout';
import HomeLayout from '../layouts/HomeLayout';

// pages

import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

const Router = () => {

    return (
            <Switch>

                <Route exact path="/" render = {() =>(
                    <HomeLayout>
                        <HomePage/>
                    </HomeLayout>
                )} 
                />

                <Route path="/myservices" render ={() =>(
                    <MainLayout>
                        <ServicePage/>
                    </MainLayout>
                )}  
                />

                <Route path="/contactme" render ={() =>(
                    <MainLayout>
                        <ContactPage/>
                    </MainLayout>
                )}  
                />

                <Route path="/aboutme" render ={() =>(
                    <MainLayout>
                        <AboutPage/>
                    </MainLayout>
                )}  
                />

            </Switch>
    )
}

export default Router
