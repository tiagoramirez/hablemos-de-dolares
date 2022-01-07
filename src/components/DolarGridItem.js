import React from "react";

export const DolarGridItem = ({casa}) => {
    const { nombre, compra, venta } = casa;

    return (
        <div>
            <h4>{nombre}</h4>
            <h5>Compra: {compra}</h5>
            <h6>Venta: {venta}</h6>
        </div>
    );
};
