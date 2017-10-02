// Framework
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToReturnList } from '../actions/actions.jsx';
import { store } from '../../../imports/startup/client/index.js';

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
    if (!this.state.checkboxChecked) {
      store.dispatch(addItemToReturnList({
        "sellersName": this.props.sellersName,
        "itemName": this.props.item.name,
        "quantityToReturn": this.props.item.quantityPurchased
      }))
    } else {
      store.dispatch(addItemToReturnList({
        "sellersName": this.props.sellersName,
        "itemName": this.props.item.name,
        "quantityToReturn": 0
      }))
    }
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
            <div className='item-price'>C${this.props.item.pricePerItem}</div>
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
            <div className='item-info-label'>Size</div>
            <div className='item-info'>{this.props.item.size}</div>
          </row>
          <hr/>
          <row>
            <div className='item-info-label'>Colour</div>
            <div className='item-info'>{this.props.item.color}</div>
          </row>
          <hr/>
          <row>
            <div className='item-info-label'>Return Quantity</div>
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

export default connect()(Item);
