var React = require('react');

var Main = React.createClass({
    render: function () {
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
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    {this.props.children}
                </div>

                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <p>Copyright &copy; Your Website 2014</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
});

module.exports = Main;