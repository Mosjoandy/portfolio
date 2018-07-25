import React from "react";
import "./Share.css";

const Share = () => (

    <div className="row border shareContent">
        <div className="sharebg" />

        <div className="col-md-6 border">
            <h1> hello share</h1>
        </div>

        <div className="col-md-6 border">

            <h1 className="text-center">ShareBnB</h1>
            <a href="https://github.com/Mosjoandy/ShareBnb"><img width="100rem" src="https://news.bitcoin.com/wp-content/uploads/2018/06/880593_media_512x512-300x300.png" alt="github icon" /></a>
            <a href="https://mysterious-cliffs-66031.herokuapp.com/"><img width="100rem" src="https://png.icons8.com/color/1600/heroku.png" alt="share coin" /></a>

        </div>
    </div>
);

export default Share;
