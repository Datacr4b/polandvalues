import React from "react";
import "./main-page.css";
import { communism, environment, freemarket, globalism, conservative, liberty, nationalism, order, double_arrow } from "../images";
import { NavLink } from "react-router";

function MainPage() {

    return (
        <>
            <div className="main-container">
                <div>ECONOMIC</div>&nbsp;
                <div>LEGAL</div>&nbsp;
                <div>GLOBAL</div>&nbsp;
                <div>SOCIAL</div>
                <img className="ideology-image" alt="communist icon" src={communism}></img>&nbsp;
                <img className="ideology-image" alt="freedom icon" src={liberty}></img>&nbsp;
                <img className="ideology-image" alt="globalism icon" src={globalism}></img>&nbsp;
                <img className="ideology-image" alt="conservatism icon" src={conservative}></img>
                <img className="ideology-image" alt="free market icon" src={freemarket}></img>&nbsp;
                <img className="ideology-image" alt="law and order icon" src={order}></img>&nbsp;
                <img className="ideology-image" alt="nationalism icon" src={nationalism}></img>&nbsp;
                <img className="ideology-image" alt="environment icon" src={environment}></img>
            </div>
            <button className="test-button"><NavLink to="/test">Click to Start Test!</NavLink></button>
            <hr></hr>
            <h1><b>What is Poland Values ?</b></h1>
            <p>Poland Values is a political test designed to place you on 4 different ideological axis. Based on those values we will attempt to gauge your political ideology and 
                pair you to <b style={{color: "#B53F47"}}>Polish</b> political candidates. You will be presented with statements, you will answer your opinion to the statement, from <b>Strongly Agree</b> to <b>Strongly Disagree</b>. 
                Each of those will pull you closer to one side of the ideological axis, when the test concludes you will receive a percentage compared to the maximum possible values 
                on each of the ideological axis. <u>Answer honestly!</u></p>
            <br></br>
            <h1>What do the different axis consist of ?</h1>
            <p>There are four different ideological axis (ECONOMIC, LEGAL, GLOBAL and SOCIAL), each having two values opposing each other.</p>
            <div className="axis-container-bg">
                <div className="axis-container-spacer">
                    <div className="axis-container-explanation-left">
                        <p className="axis-container-value"><b style={{color: "#B53F47"}}>Communism</b></p>
                        <p className="axis-container-text">Higher scores on Communism indicate support for government interventions in the economy. It can go from regulatory practices, 
                            welfare and social programs, expanding the government, banning products all the way to total economic nationalization.
                        </p>
                    </div>
                    <div className="axis-container-explanation-middle">
                        <p className="axis-container-axisname">ECONOMIC</p>
                        <img className="axis-container-arrow" src={double_arrow} alt="double arrow"></img>
                    </div>
                    <div className="axis-container-explanation-right">
                        <p className="axis-container-value"><b style={{color: "#79B53F"}}>Free Market</b></p>
                        <p className="axis-container-text">Higher scores on Free Market indicate support for removing government intervention in the economy. It can go from lower taxes, 
                            abolishing state departments, abolishing welfare and social programs, legalizing products, all the way to total economic privatization.
                        </p>
                    </div>
                </div>
                <div className="axis-container-spacer">
                    <div className="axis-container-explanation-left">
                        <p className="axis-container-value"><b style={{color: "#B5A33F"}}>Liberty</b></p>
                        <p className="axis-container-text">Higher scores on Liberty indicate support for lowering government involvement in the judicial system. It can go from lower penalties
                            for misdemeanors, abolishing the death penalty, support for the Second Amendment, reduction in laws on the books all the way to private courts and 
                            total decentralization.
                        </p>
                    </div>
                    <div className="axis-container-explanation-middle">
                        <p className="axis-container-axisname">LEGAL</p>
                        <img className="axis-container-arrow" src={double_arrow} alt="double arrow"></img>
                    </div>
                    <div className="axis-container-explanation-right">
                        <p className="axis-container-value"><b style={{color: "#3F51B5"}}>Order</b></p>
                        <p className="axis-container-text">Higher scores on Order indicate support for increasing government involvement in the judicial system. It can go from higher penalties
                            for misdemeanors, more funding for law enforcement government bodies, increased policing, digital identification, all the way 
                            to further centralization and dictatorship. 
                        </p>
                    </div>
                </div>
                <div className="axis-container-spacer">
                    <div className="axis-container-explanation-left">
                        <p className="axis-container-value"><b style={{color: "#B53F83"}}>Globalism</b></p>
                        <p className="axis-container-text">Higher scores on Globalism indicate support for a free trade and diplomatic foreign policy. It can go from removing tariffs on products,
                             diplomacy-first foreign policy, demilitarization, support for immigration, political and trade unions all the way to a world government and common currency.
                        </p>
                    </div>
                    <div className="axis-container-explanation-middle">
                        <p className="axis-container-axisname">GLOBAL</p>
                        <img className="axis-container-arrow" src={double_arrow} alt="double arrow"></img>
                    </div>
                    <div className="axis-container-explanation-right">
                        <p className="axis-container-value"><b style={{color: "#3FB5AD"}}>Nationalism</b></p>
                        <p className="axis-container-text">Higher scores on Nationalism indicate support for a self-sustainable and military foreign policy. It can go from increased self-sustainability
                            of the nation, higher tariffs, support for national currency, opposition to immigration, increased funding for the military all the way to imperialism and colonialism.
                        </p>
                    </div>
                </div>
                <div className="axis-container-spacer">
                    <div className="axis-container-explanation-left">
                        <p className="axis-container-value"><b style={{color: "#B57C3F"}}>Conservative</b></p>
                        <p className="axis-container-text">Higher scores on Conservative indicate support for socially traditional views. It can go from opposition to gender ideology, delegalization of
                            abortion, support for meritocracy, delegalization of same-sex marriage, support for closed border policies all the way to religious fundamentalism.
                        </p>
                    </div>
                    <div className="axis-container-explanation-middle">
                        <p className="axis-container-axisname">SOCIAL</p>
                        <img className="axis-container-arrow" src={double_arrow} alt="double arrow"></img>
                    </div>
                    <div className="axis-container-explanation-right">
                        <p className="axis-container-value"><b style={{color: "#3FB540"}}>Progressive</b></p>
                        <p className="axis-container-text">Higher scores on Progressive indicate support for socially liberal views. It can go from support for LGBTQ ideology, legalization of abortion, 
                            support for racial reparations, support for open border policies, support for green-based energy, atheism all the way to secular liberalism.
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            <h1>I don't agree with my results!</h1>
            <p>If you want to help and improve the test, please contribute to the project!</p>
        </>
    );
};

export default MainPage;