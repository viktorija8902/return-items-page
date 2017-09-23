// Framework
import React from 'react';
import PropTypes from 'prop-types';

export class Item extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='left-box'></div>
        <div className='right-box'>
          <row>
            <div className='item-price'>{this.props.item.pricePerItem}</div>
            <input
                name="item-checked"
                type="checkbox"
            />
          </row>
          <row>
            <div className='brand'>{this.props.item.brand}</div>
          </row>
          <row>
            <div className='item-info name'>{this.props.item.name}</div>
            </row>
          <hr/>
          <row>
            <div>Size</div>
            <div className='item-info'>{this.props.item.size}</div>
          </row>
          <hr/>
          <row>
            <div>Colour</div>
            <div className='item-info'>{this.props.item.color}</div>
          </row>
          <hr/>
          <row>
            <div>Return Quantity</div>
            <div className='item-info'>{this.props.item.quantityPurchased}</div>
          </row>
        </div>
      </div>
    );
  }
}
Item.propTypes = {
  item: PropTypes.object
};

export default Item;
