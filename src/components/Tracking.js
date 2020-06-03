import React from "react";
import "./styles/Tracking.css"
import HeadLine from "./HeadLine";
import Footer from "./Footer";

class Tracking extends React.Component{
    render() {
        return (
            <div id="tracking-page">
                <HeadLine />
                <div id="tracking-text">
                    The page is yet to be done.
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Tracking;