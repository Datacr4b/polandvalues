import React, { useState, useMemo } from "react";
import "../css/question.css";
import questionItems from "../objects/questions";
import { useNavigate, useLocation } from "react-router";

function Question() {
    const numOfQuestions = questionItems.length;
    const location = useLocation();
    const socialWeight = location.state?.valueSocial;
    const legalWeight = location.state?.valueLegal;
    const economyWeight = location.state?.valueEconomy;
    const globalWeight = location.state?.valueGeopolitics;

    const [questionNumber, setQuestionNumber] = useState(0);
    const [econArray, setEconArray] = useState([]);
    const [legalArray, setLegalArray] = useState([]);
    const [globalArray, setGlobalArray] = useState([]);
    const [socialArray, setSocialArray] = useState([]);
    const [answerArray, setAnswerArray] = useState([]);

    let navigate = useNavigate();

    const maxScores = useMemo(
        () => { 
            return questionItems.reduce(
                (acc, q) => {
                    acc.econ += Math.abs(q.effect.econ * economyWeight);
                    acc.legal += Math.abs(q.effect.legal * legalWeight);
                    acc.global += Math.abs(q.effect.global * globalWeight);
                    acc.social += Math.abs(q.effect.social * socialWeight);
                    return acc;
                },{ econ: 0, legal: 0, global: 0, social: 0 }
            );
        },[economyWeight, legalWeight, globalWeight, socialWeight]
    );

    const onAnswer = (multiplier) => {
        const q = questionItems[questionNumber].effect;

        const deltaEcon = q.econ * multiplier * economyWeight;
        const deltaLegal = q.legal * multiplier * legalWeight;
        const deltaGlobal = q.global * multiplier * globalWeight;
        const deltaSocial = q.social * multiplier * socialWeight;
        let weightMult = multiplier;

        if (questionNumber === numOfQuestions - 1) {
            const econ_result = econArray.reduce((a, b) => a + b, 0);
            const legal_result = legalArray.reduce((a, b) => a + b, 0);
            const global_result = globalArray.reduce((a, b) => a + b, 0);
            const social_result = socialArray.reduce((a, b) => a + b, 0);


            let final_econ = calculateScores(econ_result + deltaEcon, maxScores.econ);
            let final_legal = calculateScores(legal_result + deltaLegal, maxScores.legal);
            let final_global = calculateScores(global_result + deltaGlobal, maxScores.global);
            let final_social = calculateScores(social_result + deltaSocial, maxScores.social);

            navigate(`/results?e=${final_econ}&l=${final_legal}&g=${final_global}&s=${final_social}&a=${answerArray},${multiplier}`);

            return;
        }

        setEconArray(prev => ([...prev, deltaEcon]));
        setLegalArray(prev => ([...prev, deltaLegal]));
        setGlobalArray(prev => ([...prev, deltaGlobal]));
        setSocialArray(prev => ([...prev, deltaSocial]));

        if(Math.abs(q.econ) > 2) { weightMult *= economyWeight }
        if(Math.abs(q.legal) > 2) { weightMult *= legalWeight }
        if(Math.abs(q.global) > 2) { weightMult *= globalWeight }
        if(Math.abs(q.social) > 2) { weightMult *= socialWeight }
        
        setAnswerArray(prev => ([...prev, weightMult]));

        setQuestionNumber(prev => (prev + 1));
    };

    const calculateScores = (score, max) => {
        return (100*(max+score)/(2*max)).toFixed(1);
    };

    return (
        <>
            <div className="question-number">
                <h2>Question {questionNumber + 1} of {numOfQuestions}</h2>
            </div>
            <div className="question-container">
                <p>{questionItems[questionNumber].question}</p>
            </div>
            <div className="answers-container">
                <button className="strongly-agree" onClick={() => onAnswer(1.0)}>Strongly Agree</button>
                <button className="agree" onClick={() => onAnswer(0.5)}>Agree</button>
                <button className="neutral" onClick={() => onAnswer(0.0)}>Neutral</button>
                <button className="disagree" onClick={() => onAnswer(-0.5)}>Disagree</button>
                <button className="strongly-disagree" onClick={() => onAnswer(-1.0)}>Strongly Disagree</button>
            </div>
        </>
    );
};

export default Question;