'use client'

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
    title: string,
    location: string,
    url: string,
    handle: string
}

const GridTile = ({title, location, url, handle} : Props ) => { 
    return (
        <div>
            <Card className="sm:w-full md:w-full lg: w-[400px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <CardHeader>
                    <CardTitle className="inline-flex justify-between">
                    <Link href={`/hotel/${handle}`}>{title}</Link>  <Button className="relative -top-2.5 "><Heart /></Button>
                    </CardTitle>
                    </CardHeader>
                    <CardContent className="relative w-full h-[200px] md:h-[300px]">
                            <Image className="rounded-sm drop-shadow-sm object-cover"
                            src={url}
                            layout="fill"
                            alt="Hotel room" />
                        </CardContent>
                        <div className="mx-4 flex-col">
                        <CardDescription className="font-bold text-slate-300">{location}</CardDescription>
                        <CardDescription className="p-1">400 EUR</CardDescription>
                        </div>
                
            </Card>
            
        </div>
    );
}

export default GridTile;