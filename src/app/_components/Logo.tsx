import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({width,height}:{width:number,height:number}) => {
  return (
    <Link href={'/'}>
      <Image src="/logo2x.svg" alt="Grevego" width={width} height={height} className='md:w-[200px]' />
    </Link>
  );
}

export default Logo