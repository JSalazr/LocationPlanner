import React from 'react';
import PropTypes from 'prop-types';
import {getLocations} from '../actions';

const handleSubmit = (address, loadLocations) => {
  getLocations(address).then(locations => {
    loadLocations(locations);
  });
}

function AddressButton(props) {
  return (
      <button className="button top-bar-button" onClick={() => handleSubmit(props.address, props.loadLocations)}>
        Search
      </button>
  );
}

AddressButton.propTypes = {
  address: PropTypes.string,
  loadLocations: PropTypes.func
};

export default AddressButton;