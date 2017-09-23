import React from 'react';
import PropTypes from 'prop-types';

class HelpModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='help-modal'>
        <button className='call-us-btn'>
          Call Us
        </button>
        <button className='close-help-btn' onClick={this.props.onClose}>
          Close
        </button>
      </div>
    );
  }
}
HelpModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default HelpModal;
