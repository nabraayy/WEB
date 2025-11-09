import { Menu, X, Youtube, Instagram, Linkedin } from "lucide-react";
import { type SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';

import { useState } from "react";
export default function HeaderNav() {
    const { auth } = usePage<SharedData>().props;
    const [open, setOpen] = useState(false);
    return (
        
        <>
            
                <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    
                    <div className="flex items-right space-x-8">
                    <Link href={route('home')}>
                    <h1 className="text-2xl font-bold text-black">LADELIKADA</h1>
                    </Link>
                    </div>
                    <div className="flex items-center space-x-8">
                    <nav className="hidden md:flex space-x-6">
                        <Link href={route('home')} className="hover:text-[#f9a875] text-gray-7000">WORK</Link>
                        <div className="relative group">
                            <Link href='' className="hover:text-[#f9a875] text-gray-700">
                                SHORT FILMS
                            </Link>

                            <div className="absolute left-0 hidden w-48 bg-white shadow-lg rounded-lg group-hover:block">
                                <Link href={route('LaEspera')} className="block px-4 py-2 hover:text-[#f9a875] text-gray-700">
                                La Espera
                                </Link>
                                <Link href="/shortfilms/film2" className="block px-4 py-2 hover:text-[#f9a875] text-gray-700">
                                Hmmm… 
                                </Link>
                                <Link href={route('conTrabajo')} className="block px-4 py-2 hover:text-[#f9a875] text-gray-700">
                                Con-trabajo
                                </Link>
                                <a href={route('Sortilegios')} className="block px-4 py-2 hover:text-[#f9a875] text-gray-700">
                                Sortilegios Muesley
                                </a>
                            </div>
                        </div>
                    
                        <div className="relative group">
                            <button className="hover:text-[#f9a875] text-gray-700">
                                ANIMATION
                            </button>

                            <div className="absolute left-0 hidden w-48 bg-white shadow-lg rounded-lg group-hover:block">
                                <a href="/shortfilms/film1" className="block px-4 py-2 hover:text-[#f9a875] text-gray-700">
                                Ajolote
                                </a>
                            </div>
                        </div>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">SKETCHES</a>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">ILLUSTRATIONS</a>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">ABOUT US</a>
                    </nav>
                    </div>

                    
                    <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-[#f9a875]">
                        <Youtube size={20} />
                    </a>
                    <a href="https://www.instagram.com/ladelikada?utm_source=ig_web_button_share_sheet&igsh=YzYwdmRwbzg2eGI1" className="text-[#f9a875]">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-[#f9a875]">
                        <Linkedin size={20} />
                    </a>
                    </div>

                    
                    <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                    >
                    {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

              
                {open && (
                    <nav className="md:hidden bg-white shadow-md border-t">
                       
                    <ul className="flex flex-col items-center space-y-3 py-4">
                        

                        <li><a href="#" className="hover:text-[#f9a875] text-gray-700">WORK</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-600">SHORT FILMS</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-600">ANIMATION</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-600">SKETCHES</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-600">ILLUSTRATIONS</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-600">ABOUT US</a></li>
                    </ul>
                    <div className="flex justify-center space-x-4 pb-4">
                         <a
                            href="https://www.youtube.com/tu-canal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Youtube className="text-gray-600 hover:text-orange-600" size={20} />
                        </a>
                        <Instagram href='https://www.instagram.com/ladelikada?utm_source=ig_web_button_share_sheet&igsh=YzYwdmRwbzg2eGI1' className="text-gray-600 hover:text-orange-600" size={20} />
                        <Linkedin className="text-gray-600 hover:text-orange-600" size={20} />
                    </div>
                    
                    </nav>
                )}
                </header>
    
    </>
      );
}