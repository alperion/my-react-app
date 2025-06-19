// src/pages/Orders.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useOrders from '../hooks/useOrders';



const Orders = () => {

  const orderss = useOrders();
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Siparişlerim</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {orderss.orders.map(order => (
            <div key={order.id} className="bg-white border border-blue-500 rounded-lg p-3 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-700">#{order.status}</p>
                  <p className="text-xs text-gray-500">{order.status}</p>
                </div>
                <span className={`inline-block px-2 py-1 text-xs rounded-full `}>
                  {order.status}
                </span>
              </div>
              <div className="mt-3 flex justify-between">
                <p className="text-sm text-gray-600">Toplam Tutar</p>
                <p className="font-semibold">{order.status}</p>
              </div>
              <hr className="my-3 border-t border-gray-200" />
              <Link to={`/siparis-detay/${order.status}`} className="block text-center text-sm text-blue-600 hover:text-blue-800 underline mt-2">
                Siparişi Görüntüle
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Orders;