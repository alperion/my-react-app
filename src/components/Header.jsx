import React from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories.js';

const Header = () => {

    const categories = useCategories();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isElectronicsOpen, setIsElectronicsOpen] = React.useState(false);
  const [isFashionOpen, setIsFashionOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Üst Satır: Logo + Arama + Hamburger */}
        <div className="flex items-center justify-between mb-2">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">Logo</div>

          {/* Arama Çubuğu (Masaüstünde) */}
          <div className="hidden md:flex flex-grow max-w-xl mx-4">
            <form className="relative w-full">
              <input
                type="text"
                placeholder="Ürün ara..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Sağ: Hesabım ve Sepetim (Masaüstü) */}
          <div className="hidden md:flex space-x-6 text-gray-700">
            <Link to="/hesabim" className="hover:text-blue-600 hover:scale-105 transition duration-200 flex items-center space-x-1">
              <span>👤</span>
              <span>Hesabım</span>
            </Link>
            <Link to="/sepetim" className="hover:text-blue-600 hover:scale-105 transition duration-200 flex items-center space-x-1">
              <span>🛒</span>
              <span>Sepetim</span>
            </Link>
          </div>

          {/* Burger Menü (Mobil) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobil Menü İçeriği */}
        <nav
          className={`${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden transition-all duration-300 ease-linear md:hidden pb-3 space-y-2`}
        >
          <Link to="/hesabim" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">👤 Hesabım</Link>
          <Link to="/sepetim" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">🛒 Sepetim</Link>
          <hr className="border-t border-gray-200" />

          {/* Elektronik Kategorisi */}
          <button
            onClick={() => setIsElectronicsOpen(!isElectronicsOpen)}
            className="flex w-full justify-between items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Elektronik
            <span>{isElectronicsOpen ? "−" : "+"}</span>
          </button>
          <div
            className={`${
              isElectronicsOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden transition-all duration-300 pl-8 text-sm text-gray-600`}
          >
            <Link to="/urunler/telefon" className="block py-1 hover:text-blue-600">Telefon</Link>
            <Link to="/urunler/bilgisayar" className="block py-1 hover:text-blue-600">Bilgisayar</Link>
            <Link to="/urunler/tablet" className="block py-1 hover:text-blue-600">Tablet</Link>
            <Link to="/urunler/kamera" className="block py-1 hover:text-blue-600">Kamera</Link>
            <Link to="/urunler/konsol" className="block py-1 hover:text-blue-600">Oyun Konsolu</Link>
            <Link to="/urunler/aksesuar" className="block py-1 hover:text-blue-600">Aksesuar</Link>
          </div>

          {/* Moda Kategorisi */}
          <button
            onClick={() => setIsFashionOpen(!isFashionOpen)}
            className="flex w-full justify-between items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Moda
            <span>{isFashionOpen ? "−" : "+"}</span>
          </button>
          <div
            className={`${
              isFashionOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden transition-all duration-300 pl-8 text-sm text-gray-600`}
          >
            <Link to="/urunler/erkek-giyim" className="block py-1 hover:text-blue-600">Erkek Giyim</Link>
            <Link to="/urunler/kadin-giyim" className="block py-1 hover:text-blue-600">Kadın Giyim</Link>
            <Link to="/urunler/cocuk-giyim" className="block py-1 hover:text-blue-600">Çocuk Giyim</Link>
            <Link to="/urunler/spor-giyim" className="block py-1 hover:text-blue-600">Spor Giyim</Link>
            <Link to="/urunler/taki" className="block py-1 hover:text-blue-600">Takı & Aksesuar</Link>
            <Link to="/urunler/ayakkabi" className="block py-1 hover:text-blue-600">Ayakkabı</Link>
          </div>
        </nav>

        {/* Ana Menü (Masaüstüde) */}
        <nav className="hidden md:block mt-2">
          <div className="main-menu flex justify-center space-x-6 text-sm font-medium text-gray-700 relative">
            {/* Elektronik Hover Menüsü */}
                      {categories.categories.map(category => (
                          <div className="group relative">
                          <Link to="#" className="inline-block px-3 py-2 rounded hover:bg-gray-200 hover:text-blue-600">
                            {category.name}
                          </Link>
                          <div className="submenu absolute bg-white hidden group-hover:block shadow-md rounded w-40 z-10">
                            <div className="grid grid-cols-1 gap-2 p-3">
                                      {category.subCategory.map(sub => (
                                     <Link to="/urunler/erkek-giyim" className="block hover:text-blue-600 hover:bg-gray-100 px-2 py-1 rounded">{sub}</Link>
                                 ))}
                            </div>
                          </div>
                        </div>
                          
            ))}

            {/* Moda Hover Menüsü */}
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;