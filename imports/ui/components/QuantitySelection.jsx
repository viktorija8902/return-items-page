// Framework, libraries
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItemToReturnList } from '../actions/actions.jsx';
import Drawer from 'react-motion-drawer';
import {store} from '../../../imports/startup/client/index.js'
import ReturnQuantityRow from './ReturnQuantityRow';


class QuantitySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      selectedQuantity: 0
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleApplyChangesClick = this.handleApplyChangesClick.bind(this);
  }

  toggleDrawer() {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }));
  }

  handleQuantityChange(selectedQuantity) {
    this.setState({
      selectedQuantity: selectedQuantity
    });
  }

  handleApplyChangesClick() {
    this.toggleDrawer();
    store.dispatch(addItemToReturnList({
      "sellersName": this.props.sellersName,
      "itemName": this.props.itemName,
      "quantityToReturn": this.state.selectedQuantity
    }))
  }

  createAllChoices() {
    let choiceNumber = 1;
    let allChoices = [];
    const numberOfItems = this.props.quantity;
    while (choiceNumber <= numberOfItems) {
      allChoices.push(choiceNumber);
      choiceNumber++;
    }
    let quantityChoices = allChoices.map((choice) =>
        <div key={choice.toString()}>
           <ReturnQuantityRow
              label={choice}
              value={choice}
              checked={this.state.selectedQuantity == choice}
              onQuantityChange={this.handleQuantityChange}
            />
        </div>
     );

     return quantityChoices;
  }

  render() {
    allChoices = this.createAllChoices();
    return (
      <div className='quantity-selection'>
        <div>{this.state.selectedQuantity} of {this.props.quantity}</div>
        <button className='quantity-selection-btn'
          onClick={this.toggleDrawer}>
          >
        </button>
        <Drawer className='quantity-selection-drawer'
            open={this.state.isDrawerOpen}
            right={true}
            width={320}
          >
          <div className='left-arrow' onClick={this.toggleDrawer}>&#8592;</div>
          <div className='drawer-header'>Return Quantity</div>
          {allChoices}
          <hr/>
          <button className='apply-changes-btn' onClick={this.handleApplyChangesClick}>Apply Changes</button>
        </Drawer>
      </div>
    );
  }
}

export default connect()(QuantitySelection)
