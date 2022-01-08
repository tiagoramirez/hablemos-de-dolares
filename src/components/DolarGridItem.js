import React from "react";
import "../styles/components/DolarGridItem.css";

export const DolarGridItem = ({ casa }) => {
    const { nombre, compra, venta } = casa;

    return (
        <div className="dolar-card">
            <h4>{nombre}</h4>
            <hr />
            <p>Compra: {compra}</p>
            <p>Venta: {venta}</p>
        </div>
    );
};
