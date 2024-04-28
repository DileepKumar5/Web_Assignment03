import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

 export const Employeepage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-5xl font-bold text-center mb-8 text-blue-800'>
        CRUD Operations Using Next JS 14, Prisma & PostgreSQL
    </h1>

        <Button asChild className='w-[180px] h-[60px]'>
            <Link href={'/Employee/create'} className='flex  bg-gray-500'>Create</Link>
            
            </Button>
    </div>
  )
}

export default Employeepage
