'use client'

import React from "react";
import GridTile from "./grid-tile";
import { useStore } from "@/store/useStore";

interface Props {
    hotels: {title: string, location: string, url: string}[]
}

const Grid = ({hotels} : Props) => {

    const location = useStore((state) => state.location);

    const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(location.toLowerCase())
);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center p-4">
            {filteredHotels.map((hotel) => ( 
                <GridTile key={hotel.title} title={hotel.title} location={hotel.location} url={hotel.url} /> ))}
        </div>
        

    )
}

export default Grid