import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (rowKey, event, handleNameChange) => {
  handleNameChange(rowKey, event.target.value);
}

function ParticipantName(props) {
  return (
    <input className="new-participant-bar" type="text" name="address" placeholder="Name" onChange={(event) => handleChange(props.rowKey, event, props.handleNameChange)}/>
  );
}

ParticipantName.propTypes = {
  rowKey: PropTypes.number,
  handleNameChange: PropTypes.func
};

export default ParticipantName;