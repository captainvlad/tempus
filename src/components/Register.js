import React from "react";
import './styles/Register.css';

class Register extends React.Component{
    onRegister (e){
        e.preventDefault();
        console.log( this.new_name.value );
        console.log( this.new_surname.value );
        console.log( this.new_mail.value );
        console.log( this.new_password.value );
        console.log( this.new_password_confirm.value );
    }

    constructor() {
        super();
        this.onRegister = this.onRegister.bind(this);
    }

    render(){
        return(
            <div className="register_box">
                <div className="inner_register">

                    <h1>Register</h1>

                    <div className="textbox">
                        <form>
                            <label>
                                <i className="fas fa-user"></i>
                                <input placeholder="Name" type="text" name="mail" ref={(c) => this.new_name = c} />
                            </label>
                        </form>
                    </div>

                    <div className="textbox">
                        <form>
                            <label>
                                <i className="fas fa-user"></i>
                                <input placeholder="Surname" type="text" name="mail" ref={(c) => this.new_surname = c} />
                            </label>
                        </form>
                    </div>

                    <div className="textbox">
                        <form>
                            <label>
                                <i className="fas fa-envelope"></i>
                                <input placeholder="E-mail" type="text" name="mail" ref={(c) => this.new_mail = c} />
                            </label>
                        </form>
                    </div>

                    <div className="textbox">
                        <form>
                            <label>
                                <i className="fas fa-unlock"></i>
                                <input placeholder="Password" type="password" name="mail" ref={(c) => this.new_password = c} />
                            </label>
                        </form>
                    </div>

                    <div className="textbox">
                        <form>
                            <label>
                                <i className="fas fa-unlock"></i>
                                <input placeholder="Confirm password" type="password" name="mail" ref={(c) => this.new_password_confirm = c} />
                            </label>
                        </form>
                    </div>

                    <input className="btn" type="button" value=" Submit " onClick={this.onRegister} />

                    </div>

                </div>
        )
    }
}

export default Register;