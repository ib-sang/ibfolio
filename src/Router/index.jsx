import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

// constants
import {
    USERS_CV_MODELE
} from "./../settings/constant";

// layout
import MainLayout from '../layouts/MainLayout';
import HomeLayout from '../layouts/HomeLayout';

// pages
import HomePage from '../pages/HomePage';
import ServicePage from '../pages/ServicePage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import  Cvpage  from '../pages/Curriculum/Cvpage';
import CreateCVPage from '../pages/Curriculum/CreateCVPage';

const Router = () => {

    return (
        <BrowserRouter>
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

                <Route exact path="/cv" render ={() =>(
                    <MainLayout>
                        <Cvpage/>
                    </MainLayout>
                )}  
                />

                <Route exact path={USERS_CV_MODELE} render ={() =>(
                    <MainLayout>
                        <CreateCVPage/>
                    </MainLayout>
                )}  
                />

            </Switch>
        </BrowserRouter>
            
    )
}

export default Router
