const fs = require('fs');
let data = fs.readFileSync('src/styles.css', 'utf8');

const newCSS = `

/* ==========================================================================
   Flight Details Extra Styles
   ========================================================================== */

.flight-amenities-card {
  background: #ffffff;
  border-radius: 30px;
  padding: 32px;
  margin-top: 24px;
}

.flight-amenities-card h3 {
  margin: 0 0 24px 0;
  font-size: 18px;
  color: #2f2a36;
  font-weight: 800;
}

.flight-amenities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.flight-amenity-item {
  background: #fdf5f2;
  border-radius: 20px;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
}

.flight-amenity-item span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffecd9;
  color: #ff7a00;
}

.flight-amenity-item span svg {
  width: 20px;
  height: 20px;
}

.flight-amenity-item strong {
  font-size: 11px;
  font-weight: 700;
  color: #443c4f;
  letter-spacing: 0.02em;
}

/* Flight Details Footer */
.flight-details-footer {
  margin-top: auto;
  background: #e8e4e9;
  padding: 48px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.flight-footer-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.flight-footer-left strong {
  font-size: 14px;
  color: #1a1523;
  font-weight: 800;
}

.flight-footer-left small {
  font-size: 12px;
  color: #3b1d79;
  font-weight: 500;
}

.flight-footer-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.flight-footer-nav a {
  font-size: 13px;
  color: #6f6875;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.flight-footer-nav a:hover {
  color: #3b1d79;
}
`;

if (!data.includes('.flight-amenities-card')) {
  fs.appendFileSync('src/styles.css', newCSS);
  console.log('Appended flight styles');
} else {
  console.log('Flight styles already exist');
}
