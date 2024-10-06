// Dashboard.jsx
import React from 'react';
import PromoCard from './PromoCard';
import './styles/Dashboard.css';

function Dashboard() {
  const topPromo = {
    id: 1,
    businessName: 'The Great Eatery',
    distance: '0.5 miles',
    address: '123 Main St, Cityville',
    businessType: 'Restaurant',
    barcode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PromoCode123',
  };

  const otherPromos = [
    {
      id: 2,
      businessName: 'Melody Music Store',
      distance: '1.2 miles',
      address: '456 Harmony Ave, Cityville',
      businessType: 'Music Store',
      barcode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PromoCode456',
    },
    {
      id: 3,
      businessName: 'Fitness First Gym',
      distance: '0.8 miles',
      address: '789 Workout Blvd, Cityville',
      businessType: 'Gym',
      barcode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PromoCode789',
    },
    // Add more promos as needed
  ];

  return (
    <div className="dashboard">
      <h2>Top Promo</h2>
      <div className="promo-row">
        <PromoCard promo={topPromo} />
      </div>

      <h2>Other Promos</h2>
      <div className="promo-row">
        {otherPromos.map((promo) => (
          <PromoCard key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
