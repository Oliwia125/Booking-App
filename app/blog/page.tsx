import React from 'react'
import Navbar from '@/components/navbar/nav'
import Footer from '@/components/footer/footer'
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import BlogCard from '@/components/blog-card'
import { db } from '@/db'
import { blogTable } from '@/db/schema'
import { eq } from 'drizzle-orm'

async function blog() {
  const blogs = await db.select().from(blogTable).where(eq(blogTable.isDeleted, false))
  return (
    <main>
        <Navbar />
        <div>
          <h1 className='font-bold text-white text-6xl m-8'>Travel with us</h1>
        </div>
        <div className="grid grid-cols-3 gap-6 justify-center mx-30">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} title={blog.title} url={blog.url} description={blog.description} handle={blog.handle} />
            ))} 

           
        </div>
        <Footer />
    </main>
   
  )
}

export default blog