import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Coreteam = (props) => {
    return (
        <>
            {/* //team-container */}
            <div className="container1 ">
                <img src={props.img} className="img" alt="..." />
                <h3 className="title">{props.Name}</h3>
                <p className="text">{props.About}</p>
                <button className="btn1 ">follow</button>
            </div>

        </>
    );
}

export default Coreteam;

