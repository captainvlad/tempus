import React from "react";
import "./styles/Stats.css"
import HeadLine from "./HeadLine";
import Footer from "./Footer";

class Stats extends React.Component{
    render() {
        return(
            <div id="stats-page">
                <HeadLine />
                <div id="stats-text">
                    The page is yet to be done.
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Stats;