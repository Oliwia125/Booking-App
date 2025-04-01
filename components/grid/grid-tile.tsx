'use client'

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { 
    Carousel, 
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, } from '../ui/carousel'

const GridTile = () => {
    return (
        <div>
            <Card className="w-full max-w-xs transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <CardHeader>
                    <CardTitle className="inline-flex justify-between">
                        Hotel XYZ <Button className="relative -top-2.5"><Heart /></Button>
                    </CardTitle>
                    <CardDescription className="p-2">Germany, Frankfurt</CardDescription>
                    <CardContent>
                        <div>
                            <Image className="rounded-sm drop-shadow-sm" 
                            src='/hotelroom1.png'
                            width={400}
                            height={380}
                            alt="Hotel room"
                            />
                        </div>
                    </CardContent>
                    <CardDescription className="p-1.5">400 EUR</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}

export default GridTile;