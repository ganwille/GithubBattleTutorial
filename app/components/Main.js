var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="brand">Kulinaria.pl</div>
                <div className="address-bar">Wrocław</div>

                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">Business Casual</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p>Copyright &copy; Your Website 2014</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
};

module.exports = Main;