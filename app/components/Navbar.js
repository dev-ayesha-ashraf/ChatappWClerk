'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MyApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/forums" className="text-gray-700 hover:text-blue-600">
              Forums
            </Link>
            <Link href="/chat" className="text-gray-700 hover:text-blue-600">
              Chat
            </Link>
            <UserButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">
              Services
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">
              Contact
            </Link>
            <UserButton />
          </div>
        </div>
      )}
    </nav>
  );
}