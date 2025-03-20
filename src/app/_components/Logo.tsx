import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({width,height}:{width:number,height:number}) => {
  return (
    <Link href={'/'}>
      <Image src="/logo.svg" alt="Grevego" width={width} height={height} className='w-full' />
    </Link>
  );
}

export default Logo