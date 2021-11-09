import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon} from "@heroicons/react/solid";
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const Header = ({placeholder}) => {
    const router = useRouter();
    const [searchInput,setSearchInput] = useState('');
    const [startDate,setStartDate] = useState(new Date()); 
    const [endDate,setEndDate] = useState(new Date()); 
    const [noOfGuests,setNoOfGuests] = useState(1);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:'Selection'
    };

    const handleSelect =(ranges)=>{
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);

    };
    const resetInput = (e)=>{
        e.preventDefault();
        setSearchInput("");
    }

    const search = ()=>{

        router.push({
            pathname:"/search",
            query:{
                location:searchInput,
                startDate: startDate.toISOString(),
                endDate:endDate.toISOString(),
                noOfGuests,

            }
        });
    };
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                
                <Image 
                 onClick={()=> router.push('/')}  src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
                  
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
                <input  value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}type="text" placeholder={placeholder || "Start your Search"} className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" />
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
           {searchInput && 
           (
                <div className=" flex flex-col col-span-3 mx-auto mt-10">
                    <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={['#FD5B61']} onChange={handleSelect} />
                    <div className="flex items-center border-b-2 mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UserIcon className="h-5"/>
                        <input value={noOfGuests} onChange={(e)=>setNoOfGuests(e.target.value)} min={1} type="number" className="w-12 pl-2 text-lg outline-none text-red-400"/>
                    </div>
                    <div className="flex">
                        <button className="flex-1 text-gray-500" onClick={resetInput}>
                            Cancel
                        </button>
                        <button className="flex-1 text-red-400" onClick={search}>
                            Search
                        </button>
                    </div>
                </div>
           )
           }
        </header>
    )
}

export default Header;
