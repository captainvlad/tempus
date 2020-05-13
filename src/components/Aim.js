import React from "react";
import HeadLine from "./HeadLine";
import "./styles/Aim.css"
import Footer from "./Footer";

class Aim extends React.Component{
    render() {
        return (
            <div id="aim-page">
                <HeadLine />
                <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https%3A%2F%2Fwww.gcu.edu%2Fsites%2Fdefault%2Ffiles%2Fimages%2Farticles%2F419cbf347df385b8b5ae8e23dd1c1ebd1b1ca35a.jpg"/>
                <div id="inner-aim-page">
                    <h1>"Lost time is never found again."</h1>
                    These words of wisdom of Benjamin Franklin were the main principe while
                    website creating. The aim is to help people all over the world spend their
                    time efficiently. By setting deadlines, controlling how much time you spend
                    on each separate task, person can understand where the time passes, which
                    aspect of life consumes most time and how to plan working process.
                    So, do not wait and go to "Tracking" window (upper left corner) and start
                    living your life in a new way!
                    <button type="button" className="button">Start Tracking</button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Aim;