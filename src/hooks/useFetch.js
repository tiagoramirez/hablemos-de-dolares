import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export const useFetch = (apiUrl) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
    });

    useEffect(() => {
        fetch(apiUrl).then((answer) => {
            answer.json().then((data) => {
                setState({ data, loading: false });
            });
        });
    }, [apiUrl]);

    return state;
};

useFetch.protoTypes = {
    apiUrl: PropTypes.string.isRequired,
};
