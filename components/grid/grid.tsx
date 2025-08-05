'use client'

import React from "react";
import GridTile from "./grid-tile";
import { useStore } from "@/store/useStore";


interface Props {
    hotels: {title: string, location: string, url: string, handle: string}[]
    offset: number
}

const Grid = ({hotels, offset} : Props) => {

    const location = useStore((state) => state.searchParams.location);

    const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(location.toLowerCase())
);

    return (
<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center p-4">
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center p-4">
>>>>>>> refs/remotes/origin/main
            {filteredHotels.map((hotel, index) => ( 
                <GridTile key={`${hotel.handle}-${index}`} title={hotel.title} location={hotel.location} url={hotel.url} handle={hotel.handle} /> ))}
        </div>
        

    )
}

export default Grid