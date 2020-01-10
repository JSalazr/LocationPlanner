import React from 'react';
import PropTypes from 'prop-types';

const handleSubmit = (handleNewParticipant) => {
  handleNewParticipant();
}

function AddParticipantButton(props) {
  return (
      <button className="button bottom-button" onClick={() => handleSubmit(props.handleNewParticipant)}>
        Add participant
      </button>
  );
}

AddParticipantButton.propTypes = {
  handleNewParticipant: PropTypes.func
};

export default AddParticipantButton;