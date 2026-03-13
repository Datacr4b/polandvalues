import React from "react";
import MainPage from "./main-page";
import HeaderPage from "./header-page";
import HeadComp from "./head";

function App() {
    return (
        <>
            <HeadComp />
            <HeaderPage />
            <MainPage />
        </>
    );
}

export default App;