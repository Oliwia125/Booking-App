'use client'

import React from "react";
import GridTile from "./grid-tile";

const Grid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center p-4">
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
            <GridTile />
        </div>
        

    )
}

export default Grid