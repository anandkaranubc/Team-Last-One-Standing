// PromoCard.jsx
import React from 'react';
import './styles/PromoCard.css';

function PromoCard({ promo }) {
  const {
    businessName,
    distance,
    address,
    businessType,
    barcode,
  } = promo;

  return (
    <div className="promo-card">
      <img src={barcode} alt="Promo Barcode" className="barcode" />
      <div className="promo-details">
        <h3>{businessName}</h3>
        <p>Type: {businessType}</p>
        <p>Distance: {distance}</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
}

export default PromoCard;
