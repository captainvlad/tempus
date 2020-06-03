import React from "react";
import HeadLine from "./HeadLine";
import Footer from "./Footer";
import "./styles/Deadlines.css"

class Deadlines extends React.Component{
    render() {
        return (
            <div>
                <div id="deadlines-page">
                    <HeadLine />
                    <h1 id="deady">Deadlines</h1>
                    <div id="deadlines-text">
                        The page is yet to be done.
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Deadlines;