import React from "react";
import "./styles/Stats.css"
import HeadLine from "./HeadLine";
import Footer from "./Footer";

class Stats extends React.Component{
    render() {
        return(
            <div>
                <div id="stats-page">
                    <HeadLine />
                    <h1 id="staty">Stats</h1>
                    <div id="stats-text">
                        The page is yet to be done.
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Stats;