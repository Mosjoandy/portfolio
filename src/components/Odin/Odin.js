import React from "react";
import "./Odin.css";

const Odin = () => (

    <div className="row border odinContent">
        <div className="odinbg" />
        <div className="col-md-6 border">
            <h1 className="text-center">Odin's Ravens</h1>
        </div>
        <div className="col-md-6 border text-right">
            <a href="https://github.com/Mosjoandy/OdinsWorld"><img width="100rem" src="https://news.bitcoin.com/wp-content/uploads/2018/06/880593_media_512x512-300x300.png" alt="github icon" /></a>
            <a href="https://evening-coast-38386.herokuapp.com/"><img width="100rem" src="https://evening-coast-38386.herokuapp.com/static/media/coin-1.319f82ba.png" alt="odin coin" /></a>
        </div>
    </div>
);

export default Odin;
