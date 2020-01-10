import React from 'react';
import PropTypes from 'prop-types';
import AddressButton from './addressButton';

class AddressInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      address: event.target.value
    });
  }

  render(){
    return (
      <React.Fragment>
        <input className="address-bar" type="text" placeholder="Address" onChange={this.handleChange}/>
        <AddressButton address={this.state.address} loadLocations={this.props.loadLocations}/>
      </React.Fragment>
    );
  }
  
}

AddressInput.propTypes = {
  loadLocations: PropTypes.func
};


export default AddressInput;