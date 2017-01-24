var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Redirect = ReactRouter.Redirect;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Contact = require('../components/Contact');
var NotFound = require('../components/NotFound');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

module.exports = routes;