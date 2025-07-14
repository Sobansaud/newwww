import { Facebook, Instagram, Youtube, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-poppins text-white">(123)-456-789</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-poppins text-white">(123)-456-789</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-poppins text-white">INFO@EXAMPLE.COM</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-orange p-2 rounded-full">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-poppins text-white">9:00 AM - 4:00 PM EST</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              <div className="bg-white p-2 rounded">
                <Facebook className="w-5 h-5 text-black" />
              </div>
              <div className="bg-primary-orange p-2 rounded">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div className="bg-primary-orange p-2 rounded">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Home
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Career Opportunities
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Service Areas
              </Link>
              <Link
                href="/about"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • About Us
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Contact Us
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Warranty
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Terms Of Use
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Privacy Policy
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Returns Policy
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Shipping Policy
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Buy Windows Online
              </Link>
              <Link
                href="/sign-in"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • My Account
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">Products</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Awning Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Casement Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • High Fix Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Non-Radius Shapes
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Picture Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Radius Shapes
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Double Slider Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • End Vent Sliders
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Single Slider Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Double Hung Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Single Hung Windows
              </Link>
            </div>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-bebas text-2xl text-white mb-6 border-b-2 border-primary-orange pb-2">Blog</h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • What Makes A Company Reputable?
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Is Condensation Normal On High-Efficiency Windows?
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Black Windows Are On Trend For 2023
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Vinyl Windows Vs Wood Windows
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Bay Windows Vs Bow Windows - What's Better?
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • 10 Reasons To Choose Panes.Com
              </Link>
              <Link
                href="#"
                className="block text-sm font-poppins text-white hover:text-primary-orange transition-colors"
              >
                • Double Pane Vs Triple Pane Windows
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and payment methods */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-primary-orange py-4 px-6 rounded">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-white font-poppins text-sm text-center sm:text-left">
                © 2024 JBTam - All Rights Reserved
              </p>

              {/* Payment Methods */}
              <div className="flex flex-wrap justify-center gap-2">
                <div className="bg-white px-3 py-1 rounded text-xs font-poppins font-bold text-black">G Pay</div>
                <div className="bg-blue-600 px-3 py-1 rounded text-xs font-poppins font-bold text-white">PayPal</div>
                <div className="bg-blue-800 px-3 py-1 rounded text-xs font-poppins font-bold text-white">AMEX</div>
                <div className="bg-red-600 px-3 py-1 rounded text-xs font-poppins font-bold text-white">MC</div>
                <div className="bg-blue-900 px-3 py-1 rounded text-xs font-poppins font-bold text-white">VISA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
