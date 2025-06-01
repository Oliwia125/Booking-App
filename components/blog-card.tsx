'use client'

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface Props {
    title: string,
    url: string,
    description: string,
    handle: string
}

const BlogCard = ({title, url, description, handle} : Props) => {
    return (
        <Card className="w-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <CardHeader>
                <CardTitle className="inline-flex justify-between">
                    <Link href={`/blog/${handle}`}>{title}</Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={url} alt={title} width={400} height={400} />
            </CardContent>
            <CardDescription className="p-4 text-justify">
                {description}
            </CardDescription>  
        </Card>
    )   
}

export default BlogCard;