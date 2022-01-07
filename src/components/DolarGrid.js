import React from "react";
import { useFetch } from "../hooks/useFetch";
import { DolarGridItem } from "./DolarGridItem";

export const DolarGrid = () => {
    const { data, loading } = useFetch(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );

    const casas = !!data && [
        data[0].casa,
        data[1].casa,
        data[3].casa,
        data[4].casa,
        data[6].casa,
    ];

    return (
        <ul>
            <h3>Dolares:</h3>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                casas.map((casa) => {
                    return <DolarGridItem key={casa.agencia} casa={casa} />;
                })
            )}
        </ul>
    );
};
