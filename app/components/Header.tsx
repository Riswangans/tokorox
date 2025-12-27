import { ShoppingBag, Menu, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">TokoOnline</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-medium hover:text-blue-600">Beranda</a>
            <a href="#" className="font-medium hover:text-blue-600">Produk</a>
            <a href="#" className="font-medium hover:text-blue-600">Kategori</a>
            <a href="#" className="font-medium hover:text-blue-600">Kontak</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:block">
              <Search className="w-6 h-6" />
            </button>
            <button className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <button>
              <User className="w-6 h-6" />
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
