// Framework, libraries
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-motion-drawer';

import ReturnQuantityRow from './ReturnQuantityRow';


export class QuantitySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      selectedQuantity: 0
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
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
        <button className='quantity-selection-btn'
          onClick={this.toggleDrawer}>
          >
        </button>
        <div className='quantity-selection-drawer'>
          <Drawer className='quantity-selection-drawer'
            open={this.state.isDrawerOpen}
            right={true}>
            <div className='left-arrow' onClick={this.toggleDrawer}>&#8592;</div>
            <ul>
              {allChoices}
            </ul>
            <button>Apply Changes</button>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default QuantitySelection;
