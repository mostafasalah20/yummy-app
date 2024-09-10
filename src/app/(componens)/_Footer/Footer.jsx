import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="md:w-1/3 w-full">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <Image src='/logo.png' className="h-14" width={56} height={56} priority alt="Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">yummy</span>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="md:w-1/2 flex justify-center">
                        <div>
                            <h3 className="text-lg font-semibold  mb-4">Company</h3>
                            <ul className="space-y-2 ">
                                <li><a href="/" className="hover:underline">Home</a></li>
                                <li><a href="/Ingredients" className="hover:underline">Ingredients</a></li>
                                <li><a href="/Catogry" className="hover:underline">Catogry</a></li>
                                <li><a href="/Area" className="hover:underline">Area</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="md:w-1/2 flex justify-center ">
                        <div className=''>
                            <h3 className="text-lg font-semibold text-center mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600 h-6 w-6" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} className="text-blue-400 h-6 w-6" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} className="text-pink-500 h-6 w-6" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Copyright Section */}
                <div className="text-center text-sm">
                    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
``
