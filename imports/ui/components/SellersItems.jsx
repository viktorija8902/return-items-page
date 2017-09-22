// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Item } from './Item';

export class SellersItems extends React.Component {
  render() {
    const items = this.props && this.props.items
    const allItems = items && items.map((item) =>
                        <div key={item.name.toString()}>
                          <Item item={item} />
                        </div>
                      );
    return (
      <div className='items' >{allItems}</div>
    )
  }
}
SellersItems.propTypes = {
  items: PropTypes.array
};

export default SellersItems;
