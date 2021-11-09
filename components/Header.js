import React from 'react'
import Image from 'next/image';
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon} from "@heroicons/react/solid";
const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image 
                    src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
                <input type="text" placeholder="Start your Search" className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2"/>
            </div>
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer hover:text-gray-900">Become a host</p>
                <GlobeAltIcon className="h-6 " />

                <div className="flex border-2 rounded-full space-x-2 p-2">
                    <MenuIcon  className="h-6" />
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
           
        </header>
    )
}

export default Header
