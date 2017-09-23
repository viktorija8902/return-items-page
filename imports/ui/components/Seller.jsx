// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { SellersItems } from './SellersItems';

export class Seller extends React.Component {
  render() {
    return (
      <div className='seller-page'>
          <div className='seller-header'>
            <div className='seller-name'>{this.props.sellerWithItems.name}</div>
            <div className='items-number'>2 of 4</div>
          </div>
          <SellersItems items={this.props.sellerWithItems.items}/>
      </div>
    );
  }
}
Seller.propTypes = {
  sellerWithItems: PropTypes.object
};

export default Seller;
