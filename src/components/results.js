import React from "react";
import { communism, environment, freemarket, globalism, conservative, liberty, nationalism, order } from "../images";
import "./results.css";
import { useSearchParams } from "react-router";
import Bar from "./bar";
import ideologies from "./ideologies";
import candidates from "./candidates"

function Results() {
    const [searchParams] = useSearchParams();
    const e = searchParams.get("e");
    const l = searchParams.get("l");
    const g = searchParams.get("g");
    const s = searchParams.get("s");
    const a = searchParams.get("a").split(",");
    let ideology = "";
    let candidate = "";

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
                console.log(compareTotal);
                console.log(candidates[i].name);
                candidate = candidates[i].name;
            }
            compareTotal = 0
        }
    };

    calculateMatch();

    return (
        <>
            <div className="title-container">
                <h1>ModernPol</h1>
                <hr></hr>
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
            <hr></hr>
            <h2>Closest Match: {ideology}</h2>
            <h2>Closest Political Candidate: {candidate}</h2>
        </>
    );
}

export default Results;