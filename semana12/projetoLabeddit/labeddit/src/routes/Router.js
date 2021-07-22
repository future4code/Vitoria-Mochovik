import React from "react"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostDetailsPage from '../pages/PostDetailsPage/PostDetailsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/post/detalhes/:id">
                    <PostDetailsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router