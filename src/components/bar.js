import "./css/bar.css";
import React from "react";

function Bar(props) {
    const { name, width } = props;

    return (
        <>
            <div className={`bar ${name}`} style={{width: `${width}%`}}>
                <div className="text-wrapper">{width}%</div>
            </div>
        </>
    );
};

export default Bar;