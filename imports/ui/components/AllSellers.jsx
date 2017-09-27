// Framework
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Seller from './Seller';

export class AllSellers extends React.Component {
  render() {
    const sellersWithItems = this.props && this.props.sellersWithItems
    const allSellers = sellersWithItems &&
                       sellersWithItems.map((sellerWithItems) =>
                          <div key={sellerWithItems.name.toString()}>
                            <Seller sellerWithItems={sellerWithItems} />
                          </div>
                      );
    return (
      <div className='all-sellers-wrapper'>{allSellers}</div>
    )
  }
}
AllSellers.propTypes = {
  sellersWithItems: PropTypes.array
};

export default AllSellers;
