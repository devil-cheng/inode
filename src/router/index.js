import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../views/index'
import Book from '../views/book'
import Details from '../views/details'
import About from '../views/about'
import User from '../views/user'

class RouterIndex extends Component{
    render() {
        return (
            <Switch>
                <Route path="/" exact render = {() =>
                    <Redirect to="/index/all" />
                } />
                <Route path="/index/:id" component={Index} />
                <Route path="/book" component={Book} />
                <Route path="/details" component={Details} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
            </Switch>
        )
    }
}
export default RouterIndex