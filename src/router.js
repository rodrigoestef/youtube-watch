import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Search from './routes/search'
import Watch from './routes/watch'
import Style from "./globalStyle";
import Urlcontext from './context/urlContext'

export default () => (
    <>
        <Style/>

        <BrowserRouter>
            <Urlcontext>
                <Switch>
                    <Route exact path='/video' render={()=><Watch/>}/>
                    <Route path='/' render={() => <Search/>}/>
                </Switch>
            </Urlcontext>
        </BrowserRouter>
    </>
)