// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Item } from './Item';

export class SellersItems extends React.Component {
  render() {
    const items = this.props && this.props.items;
    const sellersName = this.props && this.props.sellersName;
    const allItems = items && items.map((item) =>
                        <div key={item.name.toString()}>
                          <Item sellersName={sellersName} item={item} />
                        </div>
                      );
    return (
      <div className='items' >{allItems}</div>
    )
  }
}
SellersItems.propTypes = {
  items: PropTypes.array,
  sellersName: PropTypes.string
};

export default SellersItems;
