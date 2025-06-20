'use client'

import React from "react"
import Link from "next/link"
import { Globe } from "lucide-react"
import { Menubar, MenubarItem, MenubarTrigger, MenubarMenu, MenubarContent } from "../ui/menubar"


const Footer = () => {
    return (
<section>
<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <Link href="/about" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    About
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/blog" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    Blog
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/contact" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    Contact us
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/pricing" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    Pricing
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/terms" className="text-base leading-6 text-gray-500 hover:text-gray-200">
                    Terms
                </Link>
            </div>
                <Menubar><div className="px-5 py-2">
                    <MenubarMenu>
                <MenubarTrigger><div className="flex items-center text-base text-gray-500 hover:text-gray-200">
                    <span className="flex-grow">Language</span>
                    <Globe className="ml-2" />
                </div></MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>English</MenubarItem>
                    <MenubarItem>Deutsch</MenubarItem>
                    <MenubarItem>Polski</MenubarItem>
                </MenubarContent>
                </MenubarMenu>
            </div>
            </Menubar>
        </nav>
       
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2025 SomeCompany, Inc. All rights reserved.
        </p>
        
        
       

        </div>
</section>

    )
}

export default Footer