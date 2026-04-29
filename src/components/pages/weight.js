import "../css/weight.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Weight() {
    const [valueSocial, setValueSocial] = useState(1); 
    const [valueLegal, setValueLegal] = useState(1); 
    const [valueEconomy, setValueEconomy] = useState(1); 
    const [valueGeopolitics, setValueGeopolitics] = useState(1); 

    let navigate = useNavigate();

    const onValueChange = (event) => {
        const value = event.target.value;
        const id = event.target.id;

        switch(id){
            case "social":
                setValueSocial(value);
                break;
            case "legal":
                setValueLegal(value);
                break;
            case "economic":
                setValueEconomy(value);
                break;
            case "global":
                setValueGeopolitics(value);
                break;
            default:
                console.log("tt");
                break;
        };
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        navigate(`/test`, { state: { valueSocial, valueLegal, valueEconomy, valueGeopolitics }});
    };

    return (
        <>
            {/* TODO weight margin choices */}
            <div className="form-container">
                <h1>Choose what issues matter to you most</h1>
                <p>These multipliers WILL affect your answers. A "0x" multiplier is the equivalent of an answer of this type being disregarded.</p>
                <br></br>
                <form onSubmit={onSubmitForm}>
                    <div className="weight-container">
                        <div className="input-container">
                            <label for="social">Social Issues</label>
                            <p>{valueSocial}x</p>
                            <input className="slider" id="social" type="range" max="2" min="0" step="0.01" value={valueSocial} onChange={onValueChange}></input>
                            
                        </div>
                        <div className="input-container">
                            <label for="legal">Legal Issues</label>
                            <p>{valueLegal}x</p>
                            <input className="slider" id="legal" type="range" max="2" min="0" step="0.01" value={valueLegal} onChange={onValueChange}></input>
                        
                        </div>
                        <div className="input-container">
                            <label for="economic">Economic Issues</label>
                            <p>{valueEconomy}x</p>
                            <input className="slider" id="economic" type="range" max="2" min="0" step="0.01" value={valueEconomy} onChange={onValueChange}></input>
                            
                        </div>
                        <div className="input-container">
                            <label for="global">Geopolitical Issues</label>
                            <p>{valueGeopolitics}x</p>
                            <input className="slider" id="global" type="range" max="2" min="0" step="0.01" value={valueGeopolitics} onChange={onValueChange}></input>
                        </div>
                    </div>
                    <br></br>
                    <input type="submit" id="submit-button" value="Start the Test!"></input>
                </form>
            </div>
        </>
    );
};

export default Weight;