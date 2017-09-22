// Framework
import React from 'react';
import PropTypes from 'prop-types';

export class Item extends React.Component {
  render() {
    return (
      <div className='item'>
        <div>{this.props.item.pricePerItem}</div>
        <input
            name="item-checked"
            type="checkbox"
        />
        <div>{this.props.item.brand}</div>
        <div>{this.props.item.name}</div>
        <div>Size {this.props.item.size}</div>
        <div>Colour {this.props.item.color}</div>
        <div>Return Quantity {this.props.item.quantityPurchased}</div>
      </div>
    );
  }
}
Item.propTypes = {
  item: PropTypes.object
};

export default Item;
