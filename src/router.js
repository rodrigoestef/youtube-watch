import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Search from './routes/search'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' render={() => <Search/>}/>
        </Switch>
    </BrowserRouter>
)