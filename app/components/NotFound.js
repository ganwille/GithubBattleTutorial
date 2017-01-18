var React = require('react');

class NotFound extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="box">
                    <div className="col-lg-12">
                        <hr />
                        <h2 className="intro-text text-center">Strona, na którą próbujesz się dostać
                            <strong>nie istnieje</strong>
                        </h2>
                        <hr />
                        <hr className="visible-xs" />
                        <p>
                        Niestety podany przez Ciebie adres nie istnieje :(
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

module.exports = NotFound;