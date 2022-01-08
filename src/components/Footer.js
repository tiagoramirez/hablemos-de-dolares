import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Footer.css";
import { irA } from "../helpers/irA";

export const Footer = ({ mail }) => {
    return (
        <footer>
            <p>Tiago Ramirez - Copyright 2022 bla bla bla</p>
            <button
                onClick={() => irA("mailto:tirama2001@gmail.com")}
                id="contacto"
            >
                Contactame
            </button>
        </footer>
    );
};

Footer.propTypes = {
    mail: PropTypes.string.isRequired,
};
