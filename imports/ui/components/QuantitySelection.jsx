// Framework, libraries
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-motion-drawer';

export class QuantitySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }));
  }

  render() {
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
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <button>Apply Changes</button>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default QuantitySelection;
