"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { usePathname } from 'next/navigation'; // بدلاً من useRouter

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [newscroll, setnewscroll] = useState(false);

    // لمعرفة المسار الحالي
    const pathname = usePathname();

    // التحكم في تغيير الشريط عند التمرير
    useEffect(() => {
        const change = () => {
            if (window.scrollY > 30) {
                setnewscroll(true);
            } else {
                setnewscroll(false);
            }
        };

        window.addEventListener('scroll', change);

        // تنظيف الـ event listener عند إلغاء التثبيت
        return () => {
            window.removeEventListener('scroll', change);
        };
    }, []);

    return (
        <div className={`  bg-white text-black fixed w-full z-50 top-0 left-0 ${newscroll ? 'shadow-lg' : ''}`}>
            <nav className="border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:w-[90%] w-full    p-2 container mx-auto">
                    <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                        <Image src='/logo.png' className=""width={40} height={40}  priority  alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">yummy</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto `} id="navbar-default">
                        <ul className="flex space-x-4 md:flex-row flex-col w-full justify-center  items-center md:me-7">
                            <li className={`cursor-pointer   text-black text-base font-medium my-3 md:px-3 md:my-0 ${pathname === '/' ? 'text-yellow-500' : ''}`}>
                                <Link className='text-center' href="/">Home</Link>
                            </li>
                            <li className={`cursor-pointer text-black text-base font-medium my-3 md:px-3 md:my-0 ${pathname === '/Ingredients' ? 'text-yellow-500' : ''}`}>
                                <Link className='text-center' href="/Ingredients">Ingredients</Link>
                            </li>
                            <li className={`cursor-pointer text-black text-base font-medium my-3 md:px-3 md:my-0 ${pathname === '/catogry' ? 'text-yellow-500' : ''}`}>
                                <Link className='text-center' href="/Catogry">Catogry</Link>
                            </li>
                            <li className={`cursor-pointer  text-black text-base font-medium my-3 md:px-3 md:my-0 ${pathname === '/Area' ? 'text-yellow-500' : ''}`}>
                                <Link className='text-center' href="/Area">Area</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

