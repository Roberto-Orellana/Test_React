import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";
import getGifs from "../helpers/getGif";
import useFetchGif from "../hooks/useFetchGif";

const GifGrid = ({ category }) => {


        const {data,loading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
                {loading && <p>Cargando...</p>}
            <div className="card-item">
                {
                    data.map((img) => (
                        <GifItem
                            key={img.id}
                            {...img} />
                    )
                    )
                }
            </div>
        </>
    )
}

export default GifGrid;