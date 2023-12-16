"use client"
import Image from 'next/image'
import Button from '@/app/components/button'
import { useState } from 'react'
export default function Home() {

  const names = ["Zubair","ahmad","Hamza","Zain","Zahid","Haider","Usman","Ali"];
   const [countstate,setcountstate] = useState(0);
    const currentName = names[countstate]

  
  const increment = () =>
  {
      setcountstate((previndex) => (previndex+1) % names.length)
  }

  const decrement = () =>
  {
    setcountstate((previndex) => (previndex-1 +names.length) % names.length)
  }

  return (
    
    <div>
    <Button title = "Next" onclickHandler={increment}/>
      {currentName}
    <Button title="Previous"  onclickHandler={decrement}/>
    </div>
  )
}

