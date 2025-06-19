// src/pages/Register.jsx
import React from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor.");
      return;
    }

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("user", JSON.stringify({ name: fullName, email }));
    alert("Kayıt başarılı!");
    navigate("/hesabim");
  };

  return (
    <section className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Yeni Hesap Oluştur</h2>
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Ahmet Yılmaz"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-posta Adresi</label>
          <input
            type="email"
            name="email"
            required
            placeholder="mail@example.com"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
          <input
            type="password"
            name="password"
            required
            minLength="6"
            placeholder="••••••••"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Şifre (Tekrar)</label>
          <input
            type="password"
            name="confirmPassword"
            required
            minLength="6"
            placeholder="••••••••"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          Kayıt Ol
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Zaten hesabınız var mı?{' '}
          <Link to="/giris" className="text-blue-600 hover:underline">Giriş Yap</Link>
        </p>
      </form>
    </section>
  );
};

export default Register;