import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({width,height}:{width:number,height:number}) => {
  return (
    <Link href={"/"}>
      <Image
        src="https://res.cloudinary.com/dm2pa4nll/grevego/logo.svg"
        alt="Grevego"
        width={width}
        height={height}
        className="md:w-[200px]"
      />
    </Link>
  );
}

export default Logo