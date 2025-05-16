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

    interface Props {
        title: string,
        location: string,
        url: string
    }

    const GridPhotosTile = ({title, location, url} : Props ) => {
        return (
            <div>
                <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    
                    <CarouselItem>
                     <div className="p-1">
                        <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselContent>
    </Carousel>

            </div>
        )
    }