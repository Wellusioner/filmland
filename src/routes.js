import React,{ lazy, Suspense } from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Header, Footer, Spinner } from './components'


//Pages
const MovieList = lazy(() => import('./pages/MovieList'));
const MovieSingle = lazy(() => import('./pages/MovieSingle'));

//Routes
const routes = [
    {
        path: '/',
        exact: true,
        component: MovieList
    },
    {
        path: '/movie/:id',
        exact: true,
        component: MovieSingle
    }
];


export default () => (
    <Router>
        <Suspense fallback={<Spinner/>}>
            <div className={'main-wrapper d-flex flex-column'}>
                <Header />
                <div className={'main flex-1'}>
                    <Switch>
                        {
                            routes.map((route,key) => (
                                <Route
                                    key={key}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))
                        }
                        <Redirect from="*" to="/"/>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Suspense>
    </Router>
);