import React from "react";
import poland from "../../images/poland.png";
import "../css/header-page.css";

function HeaderPage() {
    return (
        <>
            <header>
                <section className="header-content">
                    <img id="logo" src={poland} height="150" alt="globe icon"></img>
                    <h1 id="title"><b style={{color: "#B53F47"}}>Poland</b><b>Values</b></h1>
                </section>
                <hr></hr>
            </header>
        </>
    );
};

export default HeaderPage;