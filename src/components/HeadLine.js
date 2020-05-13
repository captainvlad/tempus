import React from "react";
import './styles/HeadLine.css'

class HeadLine extends React.Component{
    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px"
        document.getElementById("main").style.marginLeft = "250px"
    }

    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0"
        document.getElementById("main").style.marginLeft= "45%"
    }

    openNav_2 = () => {
        document.getElementById("mySidenav_2").style.width = "250px"
        document.getElementById("main_2").style.marginLeft = "-200px"
    }

    closeNav_2 = () => {
        document.getElementById("mySidenav_2").style.width = "0"
        document.getElementById("main_2").style.marginLeft = "45%"
    }

    constructor() {
        super();
    }

    render() {
        return (
            <div>

                <div id="menu" >
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={ () => this.closeNav() }>&times;</a>
                        <a href="/">Main</a>
                        <a href="/tracking">Tracking</a>
                        <a href="/deadlines">Deadlines</a>
                        <a href="/stats">Stats</a>
                        <a href="/log_in">Login</a>
                        <a href="/register">Register</a>
                    </div>

                    <div id="main">
                        <span onClick={ () => this.openNav() }>&#9776;</span>
                    </div>
                </div>

                    <h1 id="head">Tempus</h1>

                <div id="menu_2" >
                    <div id="mySidenav_2" className="sidenav_2">
                        <a href="javascript:void(0)" className="closebtn" onClick={ () => this.closeNav_2() }>&times;</a>
                        <a href="/about">About</a>
                        <a href="/aim">Aim</a>
                        <a href="/creators">Creators</a>
                        <a href="/usage">Usage</a>
                    </div>

                    <div id="main_2">
                        <span onClick={ () => this.openNav_2() }>&#10067;</span>
                    </div>

                </div>

            </div>
        );
    }
}

export default HeadLine