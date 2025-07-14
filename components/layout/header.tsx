"use client"

import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, Star, Phone, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top black bar */}
      <div className="bg-black py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-right">
          <Link href="#" className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors">
            <Star className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">Reviews</span>
          </Link>
          <Link href="#" className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors">
            <Star className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">My Quotes</span>
          </Link>
          <Link
            href="tel:(123)-456-7890"
            className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors"
          >
            <Phone className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">(123)-456-7890</span>
          </Link>
          <Link
            href="/sign-in"
            className="flex items-center gap-2 text-white hover:text-primary-orange transition-colors"
          >
            <User className="w-4 h-4 text-primary-orange" />
            <span className="text-sm font-poppins">Sign In / create Account</span>
          </Link>
        </div>
      </div>

      {/* Main header with logo */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* RAF Logo */}
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <h1 className="text-6xl font-bebas font-bold text-black tracking-wider">RAF</h1>
            </Link>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-black cursor-pointer hover:text-primary-orange transition-colors" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-black cursor-pointer hover:text-primary-orange transition-colors" />
                <span className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-poppins">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange navigation bar */}
      <div className="bg-primary-orange">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <Link
                href="/about"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/about") ? "text-black" : ""
                }`}
              >
                ABOUT US
              </Link>
              <Link href="#" className="text-white font-poppins font-medium text-sm hover:text-black transition-colors">
                VINYL WINDOWS
              </Link>
              <Link href="#" className="text-white font-poppins font-medium text-sm hover:text-black transition-colors">
                SEALED GLASS UNITS
              </Link>
              <Link href="#" className="text-white font-poppins font-medium text-sm hover:text-black transition-colors">
                PATIO DOORS
              </Link>
              <Link href="#" className="text-white font-poppins font-medium text-sm hover:text-black transition-colors">
                OPTIONS
              </Link>
              <Link href="#" className="text-white font-poppins font-medium text-sm hover:text-black transition-colors">
                OUR WORK
              </Link>
              <Link
                href="/contact"
                className={`text-white font-poppins font-medium text-sm hover:text-black transition-colors ${
                  isActive("/contact") ? "text-black" : ""
                }`}
              >
                CONTACT
              </Link>
            </nav>
            <Button className="bg-white text-primary-orange hover:bg-gray-100 px-6 py-2 font-poppins font-semibold text-sm transition-colors">
              INSTANT QUOTE
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
