import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'

import Login from  './pages/Login'
import Main from './pages/Main'

export default props => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    )
}