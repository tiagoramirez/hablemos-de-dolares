import React from "react";
import PropTypes from "prop-types";

export const Footer = (mail) => {
    return (
        <footer>
            <p>Tiago Ramirez - Copyright 2022 bla bla bla</p>
            <a href={`mailto:${mail}`}>Contactame aqui</a>
        </footer>
    );
};

Footer.propTypes = {
    mail: PropTypes.string.isRequired,
};
