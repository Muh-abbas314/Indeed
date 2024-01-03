"use client"
import Image from "next/image"
import logo from "../../public/colabs-1.svg"
import { FaRegBell } from "react-icons/fa";
import { BsChatRightText } from "react-icons/bs"
import Link from "next/link";
export default function Nav() {
  return (
    <nav className="flex my-3 justify-around">   
      <Link href={'/'}>
      <section className="w-[60vw] border">
      <Image src={logo}
      width={100}
      height={100}
      alt="colabs"/>
      </section>
      </Link>

      <section className=" flex justify-between items-center ">
        <div className="mx-2">
        <FaRegBell size={20}/>
        </div>
        <div>
        <BsChatRightText size={20} />
        </div>
      </section>

    </nav>
  )
}
