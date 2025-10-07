import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from "react";
import { Menu, X, Youtube, Instagram, Linkedin } from "lucide-react";
import Work from '@/components/Work';
export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [open, setOpen] = useState(false);
    return (
        
        <>
            
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    
                    
                    <div className="flex items-right space-x-8">
                    
                    <h1 className="text-2xl font-bold text-black">LADELIKADA</h1>
                    </div>
                    <div className="flex items-center space-x-8">
                    <nav className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-[#f9a875] text-gray-7000">WORK</a>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">SHORT FILMS</a>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">ANIMATION</a>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">SKETCHES</a>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">ILLUSTRATIONS</a>
                        <a href="#" className="hover:text-[#f9a875] text-gray-700">ABOUT US</a>
                    </nav>
                    </div>

                    
                    <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-[#f9a875]">
                        <Youtube size={20} />
                    </a>
                    <a href="#" className="text-[#f9a875]">
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
                        <Youtube className="text-gray-600 hover:text-orange-600" size={20} />
                        <Instagram className="text-gray-600 hover:text-orange-600" size={20} />
                        <Linkedin className="text-gray-600 hover:text-orange-600" size={20} />
                    </div>
                    
                    </nav>
                )}
                </header>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <Head title="LADELIKADA" />
                    <Work/>
                </div>
            </div>
        </>
    );
}
