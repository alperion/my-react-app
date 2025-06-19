// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Teşekkürler! Abone oldunuz.");
  };

  return (
    <footer className="bg-white shadow-inner border-t border-gray-200 text-gray-600 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800">Logo</h3>
            <p className="text-sm text-gray-500 mt-1">Kaliteli alışveriş için doğru adres</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-medium text-gray-800 mb-2">İletişim</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <span>📞</span><span>+90 555 123 45 67</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <span>✉️</span><span>info@ornek.com</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <span>📍</span><span>Atakent Mahallesi, İstanbul / Türkiye</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="font-medium text-gray-800 mb-2">Hızlı Erişim</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-blue-600">Ana Sayfa</Link></li>
              <li><Link to="/hesabim" className="hover:text-blue-600">Hesabım</Link></li>
              <li><Link to="/siparislerim" className="hover:text-blue-600">Siparişlerim</Link></li>
              <li><Link to="/giris" className="hover:text-blue-600">Giriş Yap</Link></li>
              <li><Link to="/kayit-ol" className="hover:text-blue-600">Kayıt Ol</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2025 Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;