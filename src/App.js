import React from 'react';
import './App.css';
import Address from './components/address';
import VotingTable from './components/votingTable';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      locations: []
    }
  }

  loadLocations = (locations) => {
    this.setState({locations});
  }

  render(){
    return (
      <div className="container">
        <div className="center">
          <h1>Lunchplace</h1>
          <Address loadLocations={this.loadLocations}/>
          <VotingTable locations={this.state.locations}/>
        </div>
      </div>
    );
  }
  
}

export default App;
