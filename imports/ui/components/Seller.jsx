// Framework
import React from 'react';

// Components
import { SellersItems } from './SellersItems';

export const Seller = () =>
  <div className='seller-page'>
    <div className='seller-name'>Seller A</div>
    <div className='items-page'>2 of 4</div>
    <SellersItems/>
  </div>;

export default Seller;
