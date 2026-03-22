import "./weight.css";

function Weight() {
    return (
        <>
            {/* TODO weight margin choices */}
            <div className="form-container">
                <h1>Choose what issues matter to you most</h1>
                <br></br>
                <form>
                    <div className="input-container">
                        <label for="social">Social Issues</label>
                        <input id="social" type="range" max="2" min="0"></input>
                        
                    </div>
                    <div className="input-container">
                        <label for="legal">Legal Issues</label>
                        <input id="legal" type="range" max="2" min="0"></input>
                    
                    </div>
                    <div className="input-container">
                        <label for="economic">Economic Issues</label>
                        <input id="economic" type="range" max="2" min="0"></input>
                        
                    </div>
                    <div className="input-container">
                        <label for="global">Geopolitical Issues</label>
                        <input id="global" type="range" max="2" min="0"></input>
                        
                    </div>
                    <input type="submit" id="submit-button" value="Start the Test!"></input>
                </form>
            </div>
        </>
    );
};

export default Weight;