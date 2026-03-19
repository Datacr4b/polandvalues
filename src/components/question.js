import React, { useState, useMemo } from "react";
import "./question.css";
import questionItems from "./questions";
import { useNavigate } from "react-router";

function Question() {
    const numOfQuestions = questionItems.length;

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
                    acc.econ += Math.abs(q.effect.econ);
                    acc.legal += Math.abs(q.effect.legal);
                    acc.global += Math.abs(q.effect.global);
                    acc.social += Math.abs(q.effect.social);
                    return acc;
                },{ econ: 0, legal: 0, global: 0, social: 0 }
            );
        },[]
    );

    const onAnswer = (multiplier) => {
        const q = questionItems[questionNumber].effect;

        const deltaEcon = q.econ * multiplier;
        const deltaLegal = q.legal * multiplier;
        const deltaGlobal = q.global * multiplier;
        const deltaSocial = q.social * multiplier;

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
        setAnswerArray(prev => ([...prev, multiplier]));

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