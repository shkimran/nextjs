'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const page = () => {
  const pathName = usePathname();
  console.log(pathName)
  const stud = [
    {
      id: 1,
      studName: 'John',
    },
    {
      id: 2,
      studName: 'Peter',
    },
    {
      id: 3,
      studName: 'David',
    },

  ]
  return (
    <>
      <h1 style={{ color: 'red' }}>about student</h1>
      {
        stud.map((item, index) => (
          <div key={index}> 
        <Link href={pathName+"/"+item.id}>{item.studName}</Link>
          </div>
        ))
      }
    </>
  )
}

export default page