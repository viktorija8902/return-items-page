// Framework
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { SellersItems } from './SellersItems';


class Seller extends React.Component {
  calculateItems() {
    let purchasedOverall = 0;
    this.props.sellerWithItems.items.forEach(function (infoAboutItem) {
      purchasedOverall = purchasedOverall + infoAboutItem.quantityPurchased
    });
    return purchasedOverall;
  }

  render() {
    const purchasedFromSeller = this.calculateItems(this.props.sellerWithItems.items);
    return (
      <div className='seller-page'>
          <div className='seller-header'>
            <div className='seller-name'>{this.props.sellerWithItems.name}</div>
            <div className='items-number'>{this.props.itemsToReturn} of {purchasedFromSeller}</div>
          </div>
          <SellersItems sellersName={this.props.sellerWithItems.name} items={this.props.sellerWithItems.items}/>
      </div>
    );
  }
}
Seller.propTypes = {
  sellerWithItems: PropTypes.object
};

const mapStateToProps = (state, props) => {
  return {
    // I am returning something which change just to test if store is connected
   itemsToReturn: state.returnItemsPage.itemsToReturn.length
  }
}

export default connect(mapStateToProps)(Seller)
