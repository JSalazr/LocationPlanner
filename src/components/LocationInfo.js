import React from 'react';
import PropTypes from 'prop-types';

function LocationInfo(props) {
  return (
    <th className="voting-column" key={props.colKey}>
        <div className={`location-info${props.colKey === props.winner ? "-winner" : ""}`}>
            <a href={props.location.link} target="blank">{props.location.name}</a><br/> 
            <p>{props.location.category}</p>
            <h4>{props.location.rating}</h4>
        </div>
    </th>
  );
}

LocationInfo.propTypes = {
  location: PropTypes.object,
  colKey: PropTypes.number,
  winner: PropTypes.number
};

export default LocationInfo;