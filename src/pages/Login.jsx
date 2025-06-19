// src/pages/Login.jsx
import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify({ name: "Alperen Çırıl", email }));
      navigate("/hesabim");
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <section className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Hoşgeldiniz</h2>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <input
          type="text"
          name="email"
          placeholder="E-posta veya Kullanıcı Adı"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Giriş Yap
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Hesabınız yok mu?{' '}
          <Link to="/kayit-ol" className="text-blue-600 hover:underline">Kayıt Ol</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;