import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img src="/placeholder-i0lcl.png" alt="New Roots Herbal" className="h-10" />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              New Roots Herbal is dedicated to providing evidence-based natural health products and education to support
              integrative approaches to healthcare.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#webinars" className="text-gray-300 hover:text-white transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@newrootsherbal.com" className="hover:text-white transition-colors">
                  info@newrootsherbal.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+18005000733" className="hover:text-white transition-colors">
                  1-800-500-0733
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} New Roots Herbal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
