'use client'

import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "../ui/button";



const LoadingGrid = dynamic(() => import("./grid"), {
  loading: () => <h1>Loading more hotels...</h1>,
});

function LazyGrid({ hotels }) {
  const [shown, setShown] = useState(false);


  return (
    <div>
      <Button onClick={() => setShown(!shown)}>
        Load more
      </Button>
      
      {shown && <LoadingGrid hotels={hotels} />}
    </div>
  );
}

export default LazyGrid;