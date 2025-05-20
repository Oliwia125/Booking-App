'use client'

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import React from "react";
import { Button } from "../ui/button";
import { 
    Carousel, 
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, } from '../ui/carousel'
import { db } from "@/db";
import { hotelRoomTable, hotelRoomPictureTable } from "@/db/schema";

interface Room {
  title: string;
  location: string;
  description: string;
  url: string;
}

interface GridPhotosTileProps {
  rooms: Room[];
}

const GridPhotosTile: React.FC<GridPhotosTileProps> = ({ rooms }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
      {rooms.map((room, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent>
                <span>
              <Image src={room.url} alt={room.title} />
              </span>
              </CardContent>
            </Card>
          </div>
          
        </CarouselItem>
      ))}
      </CarouselContent>
    </Carousel>
  );
};

export default GridPhotosTile;