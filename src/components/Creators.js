import React from "react";
import "./styles/Creators.css"
import HeadLine from "./HeadLine";
import Footer from "./Footer";

class Creators extends React.Component{
    render() {
        return (
            <div id="creators-page">
                <HeadLine />
                <h1 id="title">Creators</h1>
                <div id="creators-inner">
                    <div id="creators-inner-text">
                        This site was constructed as a part of project in Ukrainian Catholic
                        University. It's been constructed and supported by Vladyslav Zadorozhnyy
                        - Computer Science program student, 2 course. If you want to help on
                        supporting the website, please, contact either with the creator (contacts
                        are given in the footer) or Ukrainian Catholic University and Applied Sciences
                        Faculty.
                    </div>

                    <div id="photos">
                        <a href="https://ucu.edu.ua/en/"><img src="https://www.kyivpost.com/wp-content/uploads/data/uploads/a/iblock/blogs/5345/5973/original.jpg"/></a>
                        <a href="https://apps.ucu.edu.ua/en/"><img src="data:image/png;base64,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" /></a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Creators;