'use client'

import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import { getHotelsByOffset, getHotelsBySearch, type Hotel } from "./actions";
import { useStore } from "@/store/useStore";

const LoadingGrid = dynamic(() => import("./grid"), {
  loading: () => <h1>Loading more hotels...</h1>,
});

function LazyGrid() {
  const [offset, setOffest] = useState(1);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const searchParams = useStore((state) => state.searchParams);
  
  const getHotels = useCallback(async (currentOffset: number) => {
    // Use search parameters if available, otherwise get all hotels
    if (searchParams.location) {
      return await getHotelsBySearch(
        currentOffset,
        searchParams.location,
      );
    } else {
      return await getHotelsByOffset(currentOffset);
    }
  }, [searchParams]);

  // Initial load
  useEffect(() => {
    async function fetchData() {
      const result = await getHotelsByOffset(1);
      setHotels(result);
      setOffest(2);
    }
    fetchData();
  }, []);
  
  // Reset hotels when search parameters change
  useEffect(() => {
    async function fetchData() {
      setHotels([]); // Clear existing hotels
      setOffest(1); // Reset offset
      const result = await getHotelsBySearch(
        1,
        searchParams.location,
      );
      setHotels(result);
      setOffest(2); // Set to 2 for next load
    }
    
    // Only fetch if we have search parameters
    if (searchParams.location) {
      fetchData();
    }
  }, [searchParams]);

  return (
    <div>
      {hotels.length > 0 && (
        <LoadingGrid
          hotels={hotels}
          offset={offset}
        />
      )}
      <div className="flex justify-center">
      <Button
        onClick={async () => {
          const result = await getHotels(offset);
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