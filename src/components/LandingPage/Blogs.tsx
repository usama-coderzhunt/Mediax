"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import { SectionTitle, SectionWrapper } from '@/components/common'
import { blog_banner, ServicesIcon } from '@/assets'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FaRegCalendar, FaRegUser } from 'react-icons/fa6'
import axios from 'axios'

type Props = {}

// export interface BlogType {
//   banner?: string | StaticImport
//   author?: string
//   date: Date
//   title: string
//   slug?: string
//   desc?: ReactNode
// }
interface BlogType {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
  image: string | null;  // image is nullable
  createdBy: {
    id: number;
    firstName: string;
    lastName: string;
  };
}
const blogs: BlogType[] = []

export function Blogs({}: Props) {
  const [dynamicBlogsData, setDynamicBlogsData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(
          "https://api.blog.coderzhunt.com/Blogs/getWebsiteBlog",
          { domainId: 28 }
        );
        setDynamicBlogsData(response.data?.result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);


  return (
    <SectionWrapper className='py-[120px] bg-[#F5F8FD]'>
      <div className='flex justify-between gap-y-8 items-center flex-col md:flex-row'>
        <div className='flex flex-col items-center md:items-start'>
          <SectionTitle
            image={ServicesIcon}
            title='our blogs'
            heading={{
              title: 'Our Latest News & Blogs',
              className: '!text-center !md:text-left'
            }}
          />
        </div>
        {/* <Link href='/blog' className='rounded-full my-auto'>
          <Button className='font-dm_sans font_14_700 h-10 rounded-full w-[192px]'>
            View All Posts
          </Button>
        </Link> */}
      </div>
      <div className='grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14'>
        {dynamicBlogsData.map((i:any) => (
          <BlogCard key={i} blog={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

const BlogCard = (blog: any) => {
  console.log(">>blog",blog)
  return (
    <div className='p-[30px] shadow-blogCard bg-white flex flex-col gap-4 sm:gap-[30px] rounded-[20px]'>
      {/* <Image
        className='w-full h-[190px] rounded-[10px] object-cover'
        src={blog?.blog?.image ? blog?.blog?.image : ''}
        height={442}
        width={483}
        alt={blog?.blog?.title }
      /> */}
      <img className='w-full h-[190px] rounded-[10px] object-cover' src={blog?.blog?.image ? blog?.blog?.image : ''} alt={blog?.blog?.postImageAlt} />
      <div className='flex gap-2 sm:gap-5 flex-col sm:flex-row'>
        <p className='flex items-center gap-1 whitespace-nowrap'>
          <FaRegUser className='text-themePrimary' />
          &nbsp;
          <span>By {blog?.blog?.createdBy?.firstName }</span>
        </p>
        <div className='border-l hidden sm:block border-[#D8DDE1]'></div>
        <p className='flex items-center gap-1 whitespace-nowrap'>
          <FaRegCalendar className='text-themePrimary' />
          &nbsp;
          <span >{new Date(blog?.blog?.updatedAt).toDateString()}</span>
        </p>
      </div>
      <h3 className='font-outfit font_24_500 text-titleColor'>
        {blog?.blog?.title}
      </h3>
      <Link className='self-start rounded-full w-full' href={`/blog/${blog?.blog?.id  ?? ''}`}>
        <Button
          variant='outline'
          className='rounded-full uppercase py-7 w-full text-[#788094] font-dm_sans font_14_700'
        >
          read more
        </Button>
      </Link>
    </div>
  )
}
