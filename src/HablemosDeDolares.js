import React from "react";
import { DolarGrid } from "./components/DolarGrid";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const HablemosDeDolares = () => {
    return (
        <div>
            <Header />
            <DolarGrid/>
            <Footer mail="tirama2001@gmail.com"/>
        </div>
    );
};
