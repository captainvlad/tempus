import React from "react";
import "./styles/Usage.css"
import HeadLine from "./HeadLine";
import Footer from "./Footer";

class Usage extends React.Component{
    render() {
        return(
            <div id="usage-page">
                <HeadLine />
                <h1 id="usage-headline">Usage</h1>
                <div id="usage-text">
                    Go to "Tracking" section in order to start keeping track of your business and controlling time,
                    spent on each single task. Create activities, give names to them, choose category and automatically keep track of time.
                    <button type="button">Explore</button>
                    Go to "Deadlines" section in order to create task to be done and set date of expire.
                    <button type="button">Explore</button>
                    Go to "Stats" section in order to see statistics on spent time and ratio of done and undone tasks.
                    <button type="button">Explore</button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Usage