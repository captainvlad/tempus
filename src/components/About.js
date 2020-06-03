import React from "react";
import HeadLine from "./HeadLine";
import "./styles/About.css"
import Footer from "./Footer";

class About extends React.Component{
    render() {
        return (
            <div>
                <div id="about-page">
                    <HeadLine />

                    <div id="sub_head">
                        <h1>About</h1>
                    </div>

                    <div className="briefText">
                        This site is made to help people keep track of time and use their most precious resource
                        with maximum efficience. On this website you can find functions for keeping track of your time
                        and seeing how much time you spend on certain task.
                        If you are interested in statistics and how you spend your time in context of day or week, you can
                        see statistics of spent time, you tracked using the website depending on different categories (if
                        you) mention them while creating activity.
                        <button type="button" className="button">Start Tracking</button>

                        One more activity, provided by the site is deadlines setting. Set tasks to be done and finish date
                        in order to keep track of work left and not to forget anything. Cross them out when done and create
                        new ones.
                        <button type="button" className="button">Set Deadline</button>

                        Before using website, please, log in or create account.
                        Otherwise, you won't be able to use website's functionality.
                        <button type="button" className="button">Log in</button>
                        <button type="button" className="button">Register</button>
                    </div>

                    <img className="image" id="img_1" src="https://d418bv7mr3wfv.cloudfront.net/s3/W1siZiIsIjIwMTkvMDkvMjYvMDQvMDgvMzcvMjA1L1RpbWUuanBnIl0sWyJwIiwidGh1bWIiLCI5ODB4NjAwXHUwMDNlIl1d" />
                    <img className="image" id="img_2" src="https://www.prostir.ua/wp-content/uploads/2020/03/deadline.jpg"/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;