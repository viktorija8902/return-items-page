// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Components
import QuantitySelection from './QuantitySelection';

export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxChecked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      checkboxChecked: !prevState.checkboxChecked
    }));
  }

  render() {
    let checkbox;
    if (this.state.checkboxChecked) {
      checkbox = <div className='checkbox'><img onClick={this.handleClick} src='../../images/checked_checkbox.png'></img></div>
    } else {
      checkbox = <div className='checkbox'><img onClick={this.handleClick} src='../../images/checkbox.png'></img></div>
    }
    return (
      <div className='item'>
        <div className='left-box'></div>
        <div className='right-box'>
          <row>
            <div className='item-price'>{this.props.item.pricePerItem}</div>
            {checkbox}
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
            <div className='item-info'>
              <QuantitySelection
                sellersName={this.props.sellersName}
                itemName={this.props.item.name}
                quantity={this.props.item.quantityPurchased}
              />
            </div>
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
