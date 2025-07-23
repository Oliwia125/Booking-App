'use client'

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { getHotelsByOffset } from "./actions";



const LoadingGrid = dynamic(() => import("./grid"), {
  loading: () => <h1>Loading more hotels...</h1>,
});


function LazyGrid() {

  const [offset, setOffest] = useState(1);
  const [hotels, setHotels] = useState([]);
    const getHotels = async () => await getHotelsByOffset(offset)

    useEffect(() => {
      async function fetchData() {
        const result = await getHotels();
        setHotels((prev) => [...prev, ...result]);
        setOffest(offset + 1);
        console.log(offset);
      }
      fetchData();
    }, []);

  return (
    <div>
      {offset >= 1 && (
        <LoadingGrid
          hotels={hotels}
          offset={offset}
        />
      )}
      <div className="flex justify-center">
      <Button
        onClick={async () => {
          const result = await getHotels();
          setHotels((prev) => [...prev, ...result]);
          setOffest(offset + 1);
          console.log(offset);
        }}
      >
        Load more
      </Button></div>
    </div>
  );
}

export default LazyGrid;