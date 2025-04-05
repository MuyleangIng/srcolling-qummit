import Link from "next/link"
import { MoonIcon } from "lucide-react"

export default function QummitHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
            <div className="w-3 h-3 rounded-full bg-teal-500"></div>
            <div className="w-3 h-3 rounded-full bg-teal-600"></div>
          </div>
          <span className="text-xl font-semibold text-gray-800">Qummit</span>
        </div>

        <nav className="flex items-center space-x-8">
          <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
            QuMatics
          </Link>
          <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
            QuSpace
          </Link>
          <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
            QuFlow
          </Link>
          <Link href="#" className="text-gray-700 hover:text-teal-600 transition-colors">
            About Us
          </Link>
          <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
            <MoonIcon className="w-5 h-5 text-gray-700" />
          </button>
        </nav>
      </div>
    </header>
  )
}

