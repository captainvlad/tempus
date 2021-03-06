import React from "react";
import './styles/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <pre className="txt_1">{`\n©2020. All rights reserved. This site is designed as a part of student project by Vladyslav Zadorozhnyy.\nIf you have certain ideas how to improve service, please free to contact:\n\n`}</pre>
                <div className="inner_footer">

                    <div className="footer_third">
                        <h2>Have ideas to improve site?</h2>
                        <a href="https://www.instagram.com/vladzadoroznij19/"><img id="inst" src="data:image/png;base64,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" /></a>
                    </div>

                    <div className="footer_third">
                        <h2>Contact with site author?</h2>
                        <a href="zadorozhnyy@ucu.edu.ua"><img id="gmail" src="https://iconsetc.com/icons-watermarks/flat-rounded-square-white-on-yellow/raphael/raphael_mail/raphael_mail_flat-rounded-square-white-on-yellow_512x512.png" /></a>
                    </div>

                    <div className="footer_third">
                        <h2>Have any other questions?</h2>
                        <a href="https://www.facebook.com/profile.php?id=100005357955851"><img id="fb" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBTzycqWzMU28xe33Cf4SP5nG02HTsoYWrdJYhOhC_LyDwP9v8&usqp=CAU"/></a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer