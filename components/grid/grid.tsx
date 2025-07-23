'use client'

import React from "react";
import GridTile from "./grid-tile";
import { useStore } from "@/store/useStore";


interface Props {
    hotels: {title: string, location: string, url: string, handle: string}[]
    offset: number
}

const Grid = ({hotels, offset} : Props) => {

    const location = useStore((state) => state.location);

    const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(location.toLowerCase())
);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center p-4">
            {filteredHotels.map((hotel) => ( 
                <GridTile key={hotel.id} title={hotel.title} location={hotel.location} url={hotel.url} handle={hotel.handle} /> ))}
        </div>
        

    )
}

export default Grid