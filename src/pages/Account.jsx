// src/pages/Account.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  // Simüle edilmiş kullanıcı bilgisi
  const user = {
    name: "Alperen Çırıl",
    email: "cankayatunc@gmail.com"
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="user-card bg-white border border-blue-500 rounded-lg p-3 shadow-sm">
          <div className="flex justify-center mb-3">
            <div className="profile-avatar w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              👤
            </div>
          </div>
          <h2 className="font-semibold text-gray-700 text-center">{user.name}</h2>
          <p className="text-xs text-gray-500 text-center mb-3">{user.email}</p>
          <button className="block w-full py-2 px-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 text-sm mb-2">
            Kişisel Bilgilerim
          </button>
          <button className="block w-full py-2 px-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 text-sm">
            ← Çıkış Yap
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-6xl mx-auto">
        <div className="bg-white border border-blue-500 rounded-lg p-3 shadow-sm">
          <h3 className="font-semibold text-gray-700 text-sm mb-1">SİPARİŞLERİM</h3>
          <p className="text-xs text-gray-600 mb-2">Geçmiş tüm siparişlerinizi görüntüleyebilirsiniz.</p>
          <Link to="/siparislerim" className="block w-full py-1.5 px-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 text-sm">
            Görüntüle
          </Link>
        </div>

        <div className="bg-white border border-blue-500 rounded-lg p-3 shadow-sm">
          <h3 className="font-semibold text-gray-700 text-sm mb-1">FAVORİLERİM</h3>
          <p className="text-xs text-gray-600 mb-2">En çok sevdiğiniz ürünleri burada bulabilirsiniz.</p>
          <Link to="/favorilerim" className="block w-full py-1.5 px-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 text-sm">
            Listeye Git
          </Link>
        </div>

        <div className="bg-white border border-blue-500 rounded-lg p-3 shadow-sm">
          <h3 className="font-semibold text-gray-700 text-sm mb-1">ADRESLERİM</h3>
          <p className="text-xs text-gray-600 mb-2">Teslimat adreslerinizi yönetebilirsiniz.</p>
          <Link to="/adreslerim" className="block w-full py-1.5 px-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 text-sm">
            Düzenle
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Account;