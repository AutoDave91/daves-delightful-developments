import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-slate-800 text-amber-50 px-6 py-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/DDD_Logo.png"
                        alt="DDD Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    {/* <span className="ml-2 font-bold text-xl sm:text-2xl text-amber-50">
                        Dave's Delightful Developments
                    </span> */}
                </div>
                {/* <h1 className="text-xl sm:text-2xl font-bold text-amber-400">
                    Dave's Delightful Developments
                </h1> */}
                {/* <ul className="flex gap-6 text-sm sm:text-base">
                     <li className="hover:text-ddd-orange transition cursor-pointer">Home</li>
                    <li className="hover:text-ddd-orange transition cursor-pointer">About</li>
                    <li className="hover:text-ddd-orange transition cursor-pointer">Services</li> 
                    <li className="hover:text-ddd-orange transition cursor-pointer">Contact</li>
                </ul> */}
                <a href="mailto:david@davesdelightful.dev">
                    <Button
                        as="a"
                        className="bg-teal-600 hover:bg-orange-500 text-amber-50 px-5 py-2 rounded-xl shadow cursor-pointer"
                    >
                        Contact Us
                    </Button>
                </a>
            </div>
        </nav>
    );
}