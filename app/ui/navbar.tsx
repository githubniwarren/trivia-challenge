import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/images/zeniark-logo.png'
import logoMobile from '../../public/assets/images/logo.png'

export default function Navbar() {
  return (
    <div className="pt-5 w-full">
      <div className="max-w-[1500px] mx-auto w-[90%] flex justify-between items-center pb-5">
        <Link href={'/'}>
          <Image
            src={logo}
            alt="trivia Image"
            className="w-36 h-full hidden sm:block"
            width={500}
            height={500}
            priority={true}
          />
          <Image
            src={logoMobile}
            alt="Cover Image"
            className="block sm:hidden w-12 h-auto"
            priority={true}
          />
        </Link>
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Warren+Payot"
          alt=""
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  )
}
