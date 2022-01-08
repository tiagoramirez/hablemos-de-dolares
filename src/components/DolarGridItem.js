import React from "react";

export const DolarGridItem = ({casa}) => {
    const { nombre, compra, venta } = casa;

    return (
        <div className="dolar-card">
            <h4>{nombre}</h4>
            <p>Compra: {compra}</p>
            <p>Venta: {venta}</p>
        </div>
    );
};
