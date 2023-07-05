import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from 'react'

const PricingCard = () => {
  return <div className="pricing">
    <div className="card-container">
    <div className="card">
      <h3>- Basic -</h3>
      <span className="bar"></span>
      <p className=""btc>$ 39</p>
      <p>- 3 days -</p>
      <p>- 3 Pages -</p>

      <p>- Featured -</p>
      <p>- Responsive Design -</p>
      <Link to="https://themes.getbootstrap.com/product/phoenix-admin-dashboard-webapp-template/" className="btn">
        PURCHASE NOW
      </Link>

    </div>
    <div className="card">
      <h3>- Premium -</h3>
      <span className="bar"></span>
      <p className=""btc>$ 49</p>
      <p>- 2 days -</p>
      <p>- 5 Pages -</p>

      <p>- Featured -</p>
      <p>- Responsive Design -</p>
      <Link to="https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/" className="btn">
        PURCHASE NOW
      </Link>

    </div>
    <div className="card">
      <h3>- Business -</h3>
      <span className="bar"></span>
      <p className=""btc>$ 59</p>
      <p>- 5 days -</p>
      <p>- 8 Pages -</p>

      <p>- Featured -</p>
      <p>- Responsive Design -</p>
      <Link to="https://themes.getbootstrap.com/product/soft-ui-dashboard-pro/" className="btn">
        PURCHASE NOW
      </Link>

    </div>
    </div>
  </div>
  
}

export default PricingCard