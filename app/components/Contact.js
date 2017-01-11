var React = require('react');

var Contact = React.createClass({
    render: function () {
        return (
            <div className="container">

                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr />
                            <h2 className="intro-text text-center">Contact
                        <strong>business casual</strong>
                            </h2>
                            <hr />
                        </div>
                        <div className="col-md-8">
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.400802111192!2d17.03851561575503!3d51.10106487957044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27acdc4ea27%3A0xd4b44ca253f84f8b!2zS2_Fm2NpdXN6a2ksIFdyb2PFgmF3!5e0!3m2!1spl!2spl!4v1484173265210" ></iframe>
                        </div>
                        <div className="col-md-4">
                            <p>Telefon:
                        <strong></strong>
                            </p>
                            <p>Email:
                        <strong><a href="mailto:name@example.com">name@example.com</a></strong>
                            </p>
                            <p>Adres:
                        <strong>Kościuszki
                            <br />Wrocław</strong>
                            </p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr />
                            <h2 className="intro-text text-center">Formularz
                        <strong>kontaktowy</strong>
                            </h2>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vitae, distinctio, possimus repudiandae cupiditate ipsum excepturi dicta neque eaque voluptates tempora veniam esse earum sapiente optio deleniti consequuntur eos voluptatem.</p>
                            <form role="form">
                                <div className="row">
                                    <div className="form-group col-lg-4">
                                        <label>Imię</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label>Adres email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label>Numer telefonu</label>
                                        <input type="tel" className="form-control" />
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group col-lg-12">
                                        <label>Wiadomość</label>
                                        <textarea className="form-control" rows="6"></textarea>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="hidden" name="save" value="contact" />
                                        <button type="submit" className="btn btn-default">Wyślij</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Contact;