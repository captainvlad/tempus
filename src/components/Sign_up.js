import React from "react";
import "./styles/Sign_up.css"


class Sign_up extends React.Component{

    validMail( mail ){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(mail);
    }

    validPassword( password ){
        return password.length >= 6;
    }

    onSubmit(e) {
        e.preventDefault();
        var mail = this.mail.value;
        var password = this.password.value;

        if ( !this.validMail(mail) ){
            document.getElementById("prompt_1").style.display = "block";
        } else{
            document.getElementById("prompt_1").style.display = "none";
        }

        if ( !this.validPassword(password) ){
            document.getElementById("prompt_2").style.display = "block";
        } else {
            document.getElementById("prompt_2").style.display = "none";
        }

    }

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div id="login-page">
                <div id="login-box">
                    <h1>Login</h1>

                    <div className="textbox">
                        <form>
                            <label>
                                <i className="fas fa-user"></i>
                                <input placeholder="E-mail" type="text" name="mail" ref={(c) => this.mail = c} />
                            </label>
                        </form>
                    </div>

                    <p id="prompt_1"> - E-mail you input is illegal! </p>

                    <div className="textbox">
                        <form>
                            <label>
                                <i className="fas fa-lock"></i>
                                <input placeholder="Password" type="password" name="name" ref={(c) => this.password = c} />
                            </label>
                        </form>
                    </div>

                    <p id="prompt_2"> - Your password should be 6+ characters of length! </p>
                    <input className="btn" type="button" value=" Log in " onClick={this.onSubmit} />
                    <a href="###"><input className="btn" type="button" value=" Register "/></a>

                </div>
            </div>
        );
    }
}

export default Sign_up;