// src/pages/OrderDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Simüle edilmiş veri çekimi
    setProducts([
      { id: 1, name: "Kadın Siyah Gömlek", quantity: 1, price: "₺30.00" },
      { id: 2, name: "Erkek Beyaz Pantolon", quantity: 1, price: "₺45.00" }
    ]);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sipariş Detayı - #{orderId}</h2>

        <div className="space-y-3">
          {products.map(p => (
            <div key={p.id} className="flex items-start justify-between border-b pb-3">
              <div className="flex items-start space-x-3">
                <img src={`https://placehold.co/80x80?text=Product+${p.id}`} alt={p.name} className="w-16 h-16 rounded object-cover" />
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-gray-500">Adet: {p.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{p.price}</p>
              </div>
            </div>
          ))}

          <div className="mt-4 pt-3">
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Ara Toplam:</p>
              <p className="font-medium">₺75.00</p>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <p className="text-gray-600">Kargo Ücreti:</p>
              <p className="font-medium">₺0.00</p>
            </div>
            <div className="flex justify-between text-sm mt-1 font-semibold text-gray-800 border-t pt-2">
              <p>Toplam Tutar:</p>
              <p>₺75.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;