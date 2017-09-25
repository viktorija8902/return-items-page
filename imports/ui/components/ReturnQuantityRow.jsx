// Framework
import React from 'react';
import PropTypes from 'prop-types';

export class ReturnQuantityRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onQuantityChange(e.target.value);
  }

  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio"
                 value={this.props.label}
                 checked={this.props.checked}
                 onClick={this.handleChange}
          />
          {this.props.label}
        </label>
      </div>
    )
  }
}
ReturnQuantityRow.propTypes = {
  label: PropTypes.number,
  checked: PropTypes.bool,
  handleChange: PropTypes.func
};

export default ReturnQuantityRow;
