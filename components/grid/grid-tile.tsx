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
interface Props {
    title: string,
    location: string,
    url: string
}

const GridTile = ({title, location, url} : Props ) => { 
    return (
        <div>
            
            <Card className="w-full max-w-xs transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <CardHeader>
                    <CardTitle className="inline-flex justify-between">
                        {title} <Button className="relative -top-2.5 "><Heart /></Button>
                    </CardTitle>
                    <CardDescription className="p-2">{location}</CardDescription>
                    <CardContent>
                        <div className="relative w-full h-30">
                            <Image className="rounded-sm drop-shadow-sm object-cover" 
                            src={url}
                            layout="fill"
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