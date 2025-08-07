'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <div className="flex justify-center bg-black text-white relative">
            <nav className="px-8 py-4 max-w-6xl w-full">
                <div className="flex justify-between items-center w-full backdrop-blur-md bg-[#060606] border border-white/10 rounded-4xl px-6 py-3 shadow-[0_0_3px_#800080]">
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-purple-600">
                        Auvra
                    </div>
                    <div className="flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                                <a 
                                    href="/about" 
                                    className="px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#bf00ff] hover:scale-105"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/contact" 
                                    className="px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#bf00ff] hover:scale-105"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <Link href={'/auth'}>
                            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-600 text-white rounded-4xl font-semibold transition-all duration-300 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-8px_-8px_16px_rgba(191,0,255,0.1)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(191,0,255,0.2)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(191,0,255,0.1)] border border-purple-600/30 hover:bg-purple-600">
                                <span>Sign up</span>
                                <ArrowRight size={16} />
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;