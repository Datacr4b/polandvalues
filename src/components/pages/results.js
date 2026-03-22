import React from "react";
import { communism, environment, freemarket, globalism, conservative, liberty, nationalism, order } from "../../images";
import { surprised } from "../../images";
import "../css/results.css";
import { useSearchParams } from "react-router";
import Bar from "../bar";
import ideologies from "../objects/ideologies";
import candidates from "../objects/candidates"

function Results() {
    const [searchParams] = useSearchParams();
    const e = searchParams.get("e");
    const l = searchParams.get("l");
    const g = searchParams.get("g");
    const s = searchParams.get("s");
    const a = searchParams.get("a").split(",");
    let ideology = "";
    let candidate = "";
    let ideologyDescription = "";
    let candidateDescription = "Default description, in order to get this you must've clicked neutral on literally every question. Congrats I guess.";
    let icon = candidates[0].icon;
    let candidateImage = candidates[0].image;

    const e_free = (100.0-e).toFixed(1);
    const l_order = (100.0-l).toFixed(1);
    const g_nationalism = (100.0-g).toFixed(1);
    const s_prog = (100.0-s).toFixed(1);

    const axes = [
        {
            title: "Economic Axis",
            left: {name: "communism", icon: communism, value: e},
            right: {name: "freemarket", icon: freemarket, value: e_free}
        },
        {
            title: "Legal Axis",
            left: {name: "liberty", icon: liberty, value: l},
            right: {name: "order", icon: order, value: l_order}
        },
        {
            title: "Global Axis",
            left: {name: "globalism", icon: globalism, value: g},
            right: {name: "nationalism", icon: nationalism, value: g_nationalism}
        },
        {
            title: "Social Axis",
            left: {name: "conservative", icon: conservative, value: s},
            right: {name: "progressive", icon: environment, value: s_prog}
        },
    ];

    const calculateMatch = () => {
        let compareTotal = 0;
        let prevLowest = 1000000;
        let prevBiggest = 0;

        for (let i = 0; i < ideologies.length; i++)
        {

            compareTotal = (Math.abs(e - ideologies[i].stats.econ)) + (Math.abs(l - ideologies[i].stats.legal)) + (Math.abs(g - ideologies[i].stats.global)) + (Math.abs(s - ideologies[i].stats.social))
            if (compareTotal < prevLowest)
            {
                prevLowest = compareTotal;
                ideology = ideologies[i].name;
                ideologyDescription = ideologies[i].description;
            }
        }
        compareTotal = 0;
        for (let i = 0; i < candidates.length; i++)
        {
            let array = candidates[i].answers
            for (let x = 0; x < array.length; x++)
            {
                if (parseFloat(a[x]) === array[x] && parseFloat(a[x]) !== 0.0)
                {
                    compareTotal += 1;
                }
                else if (parseFloat(a[x]) === 0.0)
                {
                    continue;
                }
                else if (parseFloat(a[x])-0.5 === array[x] || parseFloat(a[x])+0.5 === array[x])
                {
                    compareTotal += 0.5;
                }
            }
            if(compareTotal > prevBiggest)
            {
                prevBiggest = compareTotal;
                console.log(candidates[i].name);
                candidate = candidates[i].name;
                candidateDescription = candidates[i].description;
                icon = candidates[i].icon;
                candidateImage = candidates[i].image;
            }
            compareTotal = 0
        }
    };

    calculateMatch();

    return (
        <>
            <div className="title-container">
                <h1>Results</h1>
            </div>
            {axes.map(axis => (
                    <React.Fragment key={axis.title}>
                        <h2>{axis.title}</h2>
                        <div className="axis">
                            <img alt={`${axis.left.name} icon`} height="128pt" src={axis.left.icon} />
                            { axis.left.value !== "0.0" && (
                                <Bar name={axis.left.name} width={axis.left.value}/>
                            )}
                            { axis.right.value !== "0.0" && (
                                <Bar name={axis.right.name} width={axis.right.value}/>
                            )}
                            <img alt={`${axis.right.name} icon`} height="128pt" src={axis.right.icon} />
                        </div>
                    </React.Fragment>
                ))
            }
            <br></br>
            <div className="closest-container">
                <div className="closest-subcontainer">
                    <h2><b style={{color: "#B53F47"}}>Closest Match</b>: {ideology}</h2>
                    <p>{ideologyDescription}</p>
                </div>
                <hr></hr>
                <div className="closest-subcontainer">
                    <h2><b style={{color: "#B53F47"}}>Closest Political Candidate</b>: {candidate}</h2>
                    <div className="desc-container">
                        <div>
                            <img alt={`${candidate} icon`} height="200px" src={icon} className="candidate-image"></img>
                        </div>
                        <div>
                            <h2>Description :</h2>
                            <p>{candidateDescription}</p>
                        </div>
                        <img alt={`${candidate} icon`} height="250px" src={candidateImage} className="candidate-image"></img>
                    </div>
                    <hr></hr>
                    <div className="surprised-container">
                        <h1 id="title"><b style={{color: "#B53F47"}}>Poland</b><b>Values</b></h1>
                        <img alt="surprised icon of poland" height="200px" src={surprised}></img>
                        <p className="left-rotate-text">Surprised by the results?<br></br>Contribute on our <a href="https://github.com/Datacr4b/modern-pol">github!</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Results;